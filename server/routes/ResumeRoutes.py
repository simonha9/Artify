from server import app, oauth, env, meilisearchService
from flask import request, jsonify, redirect, session, url_for, Response
from flask_cors import cross_origin
from urllib.parse import urlencode
from server.services.ResumeService import ResumeService
from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.MalformedRequest import MalformedRequest
from bson import ObjectId
import uuid


resumeService = ResumeService()
 

@app.get('/resumes/<id>')
@cross_origin(supports_credentials=True)
def getResume(id):
    try:
        uuid.UUID(id, version=4)
    except ValueError:
        raise MalformedRequest('Invalid uuid for resume')

    resumeBytes = resumeService.downloadResume(id)
    return Response(resumeBytes, mimetype="application/pdf"), 200



@app.delete('/resumes/<id>')
@cross_origin(supports_credentials=True)
def deleteResume(id):
    try:
        uuid.UUID(id, version=4)
    except ValueError:
        raise MalformedRequest('Invalid uuid for resume')

    resumeService.deleteResume(id)
    return jsonify({'message': 'Resume deleted successfully'}), 200


@app.get('/resumes/<id>/analyze')
@cross_origin(supports_credentials=True)
def analyzeResume(id):
    try:
        uuid.UUID(id, version=4)
    except ValueError:
        raise MalformedRequest('Invalid uuid for resume')

    return jsonify(resumeService.getResumeDetails(id))

    
@app.get('/resumes')
@cross_origin(supports_credentials=True)
def getResumes():
    offset = request.args.get('offset', default=0, type=int)
    limit = request.args.get('limit', default=10, type=int)
    resumes = resumeService.getResumes(offset, limit)
    return jsonify({'resumes': resumes})


@app.get('/resumes/search')
@cross_origin(supports_credentials=True)
def searchResumes():
    query = request.args.get('keywords') if 'keywords' in request.args else None
    return jsonify(resumeService.searchResumes(query))

    
@app.get('/resumes/<id>/status')
@cross_origin(supports_credentials=True)
def getResumeStatus(id):
    try:
        uuid.UUID(id, version=4)
    except ValueError:
        raise MalformedRequest('Invalid uuid for resume')

    return jsonify(resumeService.getResumeStatus(id))

