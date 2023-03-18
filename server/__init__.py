import json
from os import environ as env
from urllib.parse import quote_plus, urlencode

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, request, jsonify, redirect, session, url_for
from flask_mongoengine import MongoEngine
from flask_cors import CORS, cross_origin
import meilisearch

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

# create and configure the app
app = Flask(__name__, instance_relative_config=True)
CORS(app, support_credentials=True)
app.config.from_mapping(
    SECRET_KEY= env.get('SECRET_KEY') or 'dev',
    MONGODB_SETTINGS = {
        'host': env.get('MONGODB_URI') or 'mongodb://localhost:27017',
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
meilisearchService = meilisearch.Client(env.get('MEILISEARCH_URL') or 'http://localhost:7700', env.get('MEILISEARCH_MASTER_KEY') or 'masterKey')

from server.routes import UserRoutes, ResumeRoutes

from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.UserNotFoundError import UserNotFoundError
from server.errors.ResumeNotFoundError import ResumeNotFoundError

@app.errorhandler(InvalidObjectIdError)
def handleInvalidObjectId(error):
    response = jsonify({'message': 'Id is not a valid ObjectId, must be a 12-byte input or 24-character hex string'})
    response.status_code = 400
    return response

@app.errorhandler(ServerError)
def handleInvalidObjectId(error):
    print(error)
    response = jsonify({'message': 'Something went wrong'})
    response.status_code = 500
    return response

@app.errorhandler(UserNotFoundError)
def handleInvalidObjectId(error):
    response = jsonify({'message': 'User not found'})
    response.status_code = 404
    return response

@app.errorhandler(ResumeNotFoundError)
def handleInvalidObjectId(error):
    response = jsonify({'message': 'Resume not found'})
    response.status_code = 404
    return response
