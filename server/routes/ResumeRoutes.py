from server import app, oauth, env, meilisearchService
from flask import request, jsonify, redirect, session, url_for, Response
from flask_cors import cross_origin
from urllib.parse import urlencode
from server.services.ResumeService import ResumeService
from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.MalformedRequest import MalformedRequest
from bson import ObjectId


resumeService = ResumeService()
 

@app.get('/resumes/<id>')
@cross_origin(supports_credentials=True)
def getResume(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError


    resumeBytes = resumeService.downloadResume(id)
    return Response(resumeBytes, mimetype="application/pdf"), 200



@app.delete('/resumes/<id>')
@cross_origin(supports_credentials=True)
def deleteResume(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError

    resumeService.deleteResume(id)
    return jsonify({'message': 'Resume deleted successfully'}), 200


@app.get('/resumes/<id>/analyze')
@cross_origin(supports_credentials=True)
def analyzeResume(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError

    return jsonify(resumeService.getResumeDetails(id))

    
@app.get('/resumes')
@cross_origin(supports_credentials=True)
def getResumes():
    resumes = resumeService.getResumes()
    return jsonify({'resumes': resumes})


@app.get('/resumes/search')
@cross_origin(supports_credentials=True)
def searchResumes():

    query = request.args.get('keywords')
    return jsonify(resumeService.searchResumes(query))

    
@app.get('/resumes/<id>/status')
@cross_origin(supports_credentials=True)
def getResumeStatus(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError

    return jsonify(resumeService.getResumeStatus(id))

