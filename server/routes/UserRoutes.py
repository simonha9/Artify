from server import app, oauth, env, meilisearchService
from server.models.Users import User
from flask import request, jsonify, redirect, session, url_for
from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.UserNotFoundError import UserNotFoundError
from server.errors.MalformedRequest import MalformedRequest
from flask_cors import cross_origin
from urllib.parse import urlencode
import mongoengine as me
from bson import ObjectId
from server.services.FormRecognizerService import FormRecognizerService
from server.services.BlobStorageService import BlobStorageService
import io, json

fr = FormRecognizerService.getInstance()
bs = BlobStorageService.getInstance()


@app.route('/login')
@cross_origin(supports_credentials=True)
def login():
    return oauth.auth0.authorize_redirect(
        redirect_uri=url_for('login_callback', _external=True), 
        audience='https://dev-krwoywe0p7brgud1.us.auth0.com/api/v2/')

@app.route('/login-callback')
@cross_origin(supports_credentials=True)
def login_callback():
    oauth.auth0.authorize_access_token()
    userinfo = oauth.auth0.get('userinfo').json()
    session['jwt_token'] = oauth.auth0.token['access_token']
    user = {}
    try:
        user = findUserByEmail(userinfo['email'])
    except User.DoesNotExist:
        user = addUser(userinfo['email'])
    
    userinfo['id'] = str(user.id)
    session['user_info'] = userinfo
    print(userinfo)
    return redirect(env.get('FE_URL') or '/')


@app.route('/callback')
@cross_origin(supports_credentials=True)
def callback():
    return redirect(env.get('FE_URL') or '/')

@app.route('/logout')
@cross_origin(supports_credentials=True)
def logout():
    session.clear()
    params = {'returnTo': url_for('callback', _external=True), 'client_id': env.get('AUTH0_CLIENT_ID')}
    logout_url = oauth.auth0.api_base_url + '/v2/logout?' + urlencode(params)
    return redirect(logout_url)

@app.route("/users/profile")
@cross_origin(supports_credentials=True)
def getUserProfile():
    if 'user_info' not in session:
        return jsonify({'message': 'User not logged in'}), 401
    user_info = session['user_info']
    try:
        userId = User.objects.only('id').get(email=user_info['email']).id
        user_info['id'] = str(userId)
    except User.DoesNotExist:
        return jsonify({'message': 'Something went wrong with getting user profile'}), 404
    return jsonify(user_info), 200

@app.route('/users', methods=['GET'])
@cross_origin(supports_credentials=True)
def getUsers():
    if request.method == 'GET':
        users = getUsers()
        return jsonify({'users': users})
    
@app.get('/users/<id>')
@cross_origin(supports_credentials=True)
def getUser(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError
    
    try:
        if request.method == 'GET':
            user = findUserById(id)
            return jsonify({'user': user, 'uid': id})
    except User.DoesNotExist:
        raise UserNotFoundError
    except Exception as e:
        raise ServerError
    
@app.delete('/users/<id>')
@cross_origin(supports_credentials=True)
def deleteUser(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError

    try:
        user = findUserById(id)
        user.delete()
        return jsonify({'message': 'User deleted successfully'})
    except User.DoesNotExist:
        raise UserNotFoundError
    except Exception:
        raise ServerError

@app.post('/users/<id>/resumes/upload')
@cross_origin(supports_credentials=True)
def uploadResume(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError
    
    if 'file' not in request.files:
        raise MalformedRequest

    try:
        user = findUserById(id)
        uploadedFile = request.files['file']
        buffer = io.BytesIO()
        buffer.write(uploadedFile.read())
        id = bs.upload(buffer.getvalue(), str(user.id))
        result = fr.extract(buffer.getvalue(), uploadedFile.content_type)
        res = fr.analyzeResults(result)
        res['id'] = str(id)
        res['user'] = str(user.id)
        meilisearchService.index('resumes').add_documents(res)
        return jsonify({'id': str(id), 'userId': str(user.id)})
    except User.DoesNotExist:
        raise UserNotFoundError
    except Exception as e:
        print(e)
        raise ServerError
    finally:
        buffer.close()


def findUserById(id):
    user = User.objects.only('id', 'email').get(id=id)
    return user

def findUserByEmail(email):
    user = User.objects.only('id', 'email').get(email=email)
    return user

def addUser(email):
    user = User(email=email)
    user.save()
    return user

def getUsers():
    user = User.objects()
    return user

