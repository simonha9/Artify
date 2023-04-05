from server import app, oauth, env, meilisearchService
from flask import request, jsonify, redirect, session, url_for
from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.UserNotFoundError import UserNotFoundError
from server.errors.MalformedRequest import MalformedRequest
from flask_cors import cross_origin
from urllib.parse import urlencode
import mongoengine as me
from bson import ObjectId
import io, json
from server.services.UserService import UserService

userService = UserService()


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
    user = userService.findUserByEmail(userinfo['email'])
    if user is None:
        user = userService.addUser(userinfo['email'])

    userinfo['id'] = str(user.id)
    session['user_info'] = userinfo
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
    user = userService.findUserByEmail(user_info['email'])
    if user is None:
        raise UserNotFoundError
    user_info['id'] = str(user.id)
    return jsonify(user_info), 200

@app.route('/users', methods=['GET'])
@cross_origin(supports_credentials=True)
def getUsers():
    if request.method == 'GET':
        users = userService.getUsers()
        return jsonify({'users': users})
    
@app.get('/users/<id>')
@cross_origin(supports_credentials=True)
def getUser(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError

    user = userService.findUserById(id)
    return jsonify({'user': user})

    
@app.delete('/users/<id>')
@cross_origin(supports_credentials=True)
def deleteUser(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError

    userService.deleteUser(id)
    return jsonify({'message': 'User deleted successfully'})


@app.post('/users/<id>/resumes/upload')
@cross_origin(supports_credentials=True)
def uploadResume(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError
    
    if 'file' not in request.files:
        raise MalformedRequest('Expecting a \'file\' key in the request body and none was found.')
    
    if not request.form:
        raise MalformedRequest('Expecting a \'title\' key in the request body and none was found.')
    
    title = request.form['title']
    if not title:
        raise MalformedRequest('Expecting a \'title\' key in the request body and none was found.')


    file = request.files['file']
    title = request.form['title']
    rid, uid = userService.uploadResume(id, file, title)
    return jsonify({'id': str(rid), 'user': str(uid)})


@app.get('/users/<id>/resumes')
@cross_origin(supports_credentials=True)
def getUserResumes(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError

    resumes = userService.getResumes(id)
    return jsonify({'resumes': resumes})





