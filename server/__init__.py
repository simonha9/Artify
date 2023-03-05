import json
from os import environ as env
from urllib.parse import quote_plus, urlencode

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask
from flask_mongoengine import MongoEngine
from flask_cors import CORS, cross_origin

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

# create and configure the app
app = Flask(__name__, instance_relative_config=True)
CORS(app, support_credentials=True)
app.config.from_mapping(
    SECRET_KEY= env.get('SECRET_KEY') or 'dev',
    MONGODB_SETTINGS = {
        'db': 'stomach-pain',
        'host': 'mongodb+srv://dbUser:Passw0rd@sp-cluster.lrqvs8k.mongodb.net/stomach-pain'
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

from server.routes import UserRoutes


