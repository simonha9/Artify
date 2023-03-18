from server import app, oauth, env, meilisearchService
from flask import request, jsonify, redirect, session, url_for, Response
from flask_cors import cross_origin
from urllib.parse import urlencode
from server.services import FormRecognizerService
from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.ResumeNotFoundError import ResumeNotFoundError
from server.models.Resumes import Resume
from bson import ObjectId

fr = FormRecognizerService.FormRecognizerService()
 

@app.get('/resumes/<id>')
@cross_origin(supports_credentials=True)
def getResume(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError
    try:
        resume = Resume.objects.get(id=id)
        return Response(resume.file_data, mimetype="application/pdf"), 200
    except Resume.DoesNotExist:
        raise ResumeNotFoundError
    except Exception as e:
        raise ServerError


@app.delete('/resumes/<id>')
@cross_origin(supports_credentials=True)
def deleteResume(id):
    try:
        resume = Resume.objects.get(id=id)
        resume.delete()
        return jsonify({'message': 'Resume deleted successfully'}), 200
    except Resume.DoesNotExist:
        raise ResumeNotFoundError
    except Exception as e:
        raise ServerError

@app.get('/resumes/<id>/analyze')
@cross_origin(supports_credentials=True)
def analyzeResume(id):
    if (not ObjectId.is_valid(id)):
        raise InvalidObjectIdError
    try:
        resume = meilisearchService.index('resumes').get_document(id)._Document__doc
        return jsonify(resume)
    except Exception as e:
        print(e)
        raise ServerError
    


@app.get('/resumes')
@cross_origin(supports_credentials=True)
def getResumes():
    try:
        query = request.args.get('keywords')
        if query:
            results = meilisearchService.index('resumes').search(query)['hits']
            return jsonify({'resumes': results})
        else:
            all_resumes = [dict(r) for r in meilisearchService.index('resumes').get_all_documents()]
            return jsonify({'resumes': all_resumes})
    except Exception as e:
        raise ServerError
