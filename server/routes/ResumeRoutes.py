from server import app, oauth, env, meilisearchService
from flask import request, jsonify, redirect, session, url_for, Response
from flask_cors import cross_origin
from urllib.parse import urlencode
from server.services.FormRecognizerService import FormRecognizerService
from server.services.BlobStorageService import BlobStorageService
from server.errors.InvalidObjectIdError import InvalidObjectIdError
from server.errors.ServerError import ServerError
from server.errors.ResumeNotFoundError import ResumeNotFoundError
from server.errors.MalformedRequest import MalformedRequest
from azure.core.exceptions import ResourceNotFoundError
import uuid

fr = FormRecognizerService.getInstance()
bs = BlobStorageService.getInstance()
 

@app.get('/resumes/<id>')
@cross_origin(supports_credentials=True)
def getResume(id):
    try:
        uuid.UUID(id, version=4)
        resumeBytes = bs.download(id)
        return Response(resumeBytes, mimetype="application/pdf"), 200
    except ValueError:
        raise MalformedRequest
    except ResourceNotFoundError:
        raise ResumeNotFoundError
    except Exception as e:
        raise ServerError


@app.delete('/resumes/<id>')
@cross_origin(supports_credentials=True)
def deleteResume(id):
    try:
        uuid.UUID(id, version=4)
        bs.delete(id)
        meilisearchService.index('resumes').delete_document(id)
        return jsonify({'message': 'Resume deleted successfully'}), 200
    except ValueError:
        raise MalformedRequest
    except ResourceNotFoundError:
        raise ResumeNotFoundError
    except Exception as e:
        print(e)
        raise ServerError

@app.get('/resumes/<id>/analyze')
@cross_origin(supports_credentials=True)
def analyzeResume(id):
    try:
        uuid.UUID(id, version=4)
        resume = meilisearchService.index('resumes').get_document(id)._Document__doc
        return jsonify(resume)
    except ValueError:
        raise MalformedRequest
    except Exception as e:
        print(e)
        raise ServerError
    
@app.get('/resumes')
@cross_origin(supports_credentials=True)
def getResumes():
    resumes = bs.getAllBlobs()
    return jsonify({'resumes': resumes})


@app.get('/resumes/search')
@cross_origin(supports_credentials=True)
def searchResumes():
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
