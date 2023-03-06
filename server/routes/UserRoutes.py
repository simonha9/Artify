from server import app, oauth, env
from server.models.Users import User
from flask import request, jsonify, redirect, session, url_for
from flask_cors import cross_origin
from urllib.parse import urlencode


@app.route('/login')
@cross_origin(supports_credentials=True)
def login():
    return oauth.auth0.authorize_redirect(
        redirect_uri=url_for('loginCallback', _external=True), 
        audience='https://dev-krwoywe0p7brgud1.us.auth0.com/api/v2/')

@app.route('/loginCallback')
@cross_origin(supports_credentials=True)
def loginCallback():
    token = oauth.auth0.authorize_access_token()
    user_info = oauth.auth0.get('userinfo').json()
    session['jwt_token'] = oauth.auth0.token['access_token']
    session['user_info'] = user_info
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
    
@app.route('/users/<id>', methods=['GET', 'DELETE'])
@cross_origin(supports_credentials=True)
def operateOnUser(id):
    try:
        if request.method == 'GET':
            user = getUser(id)
            return jsonify({'user': user})
        if request.method == 'DELETE':
            user = getUser(id)
            user.delete()
            return jsonify({'message': 'User deleted successfully'})
    except User.DoesNotExist:
        return jsonify({'message': 'User does not exist'}, 404)

def getUser(id):
    user = User.objects.only('id', 'email').get(id=id)
    return user

def addUser(password, email):
    user = User(password=password, email=email)
    user.save()

def getUsers():
    user = User.objects()
    return user

