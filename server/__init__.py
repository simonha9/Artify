import json
from os import environ as env
from urllib.parse import quote_plus, urlencode
from functools import wraps

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, request, jsonify, redirect, session, url_for, abort
from flask_mongoengine import MongoEngine
from flask_cors import CORS, cross_origin
import meilisearch

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

# create and configure the app
app = Flask(__name__, instance_relative_config=True)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*"}})
app.config.from_mapping(
    SECRET_KEY = env.get('SECRET_KEY') or 'dev',
    MONGODB_SETTINGS = {
        'host': env.get('MONGODB_URI') or 'mongodb://0.0.0.0:27017'
    }
)
oauth = OAuth(app)
oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    api_base_url="https://dev-krwoywe0p7brgud1.us.auth0.com",
    authorize_url="https://dev-krwoywe0p7brgud1.us.auth0.com/authorize",
    access_token_url="https://dev-krwoywe0p7brgud1.us.auth0.com/oauth/token",
    server_metadata_url="https://dev-krwoywe0p7brgud1.us.auth0.com/.well-known/openid-configuration"
)

db = MongoEngine(app)
msendpoint = env.get('MEILISEARCH_URI') or 'http://0.0.0.0:7700'
meilisearchService = meilisearch.Client(msendpoint)
meilisearchService.create_index('resumes')
meilisearchService.index('resumes').update_settings({
    'filterableAttributes': [
        'user'
    ]
})
meilisearchService.create_index('tasks', {
    'primaryKey': 'rid',
})

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            parts = request.headers['Authorization'].split()
            if len(parts) == 2 and parts[0].lower() == 'bearer':
                token = parts[1]

        if not token:
            abort(401)

        try:
            payload = auth0.api_client.verify_jwt(
                token,
                algorithms=['RS256'],
                audience='https://dev-krwoywe0p7brgud1.us.auth0.com/api/v2/',
            )
        except:
            abort(401)

        return f(payload, *args, **kwargs)

    return decorated

from .routes import UserRoutes, ResumeRoutes

from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.UserNotFoundError import UserNotFoundError
from server.errors.ResumeNotFoundError import ResumeNotFoundError
from server.errors.MalformedRequest import MalformedRequest

@app.errorhandler(InvalidObjectIdError)
def handleInvalidObjectId(error):
    response = jsonify({'message': 'Id is not a valid ObjectId, must be a 12-byte input or 24-character hex string'})
    response.status_code = 400
    return response

@app.errorhandler(UserNotFoundError)
def handleUserNotFoundError(error):
    response = jsonify({'message': 'User not found'})
    response.status_code = 404
    return response

@app.errorhandler(ResumeNotFoundError)
def handleResumeNotFoundError(error):
    response = jsonify({'message': 'Resume not found', 'error': str(error)})
    response.status_code = 404
    return response

@app.errorhandler(MalformedRequest)
def handleMalformedRequest(error):
    response = jsonify({'message': 'Malformed Request: ' + str(error)})
    response.status_code = 400
    return response

@app.errorhandler(ServerError)
def handleServerError(error):
    response = jsonify({'message': 'Something went wrong', 'error': str(error)})
    response.status_code = 500
    return response
