from server import app, oauth, env
from flask import request, jsonify, redirect, session, url_for, Response
from flask_cors import cross_origin
from urllib.parse import urlencode
from server.services import FormRecognizerService
from server.models.Resumes import Resume
import io, json
from bson import ObjectId

fr = FormRecognizerService.FormRecognizerService()


@app.route('/resumes/upload', methods=['POST'])
@cross_origin(supports_credentials=True)
def uploadResume():
    if request.method == 'POST':
        try:
            print(request.files['file'])
            uploadedFile = request.files['file']
            resume = Resume(file_data=uploadedFile.read())
            resume.save()
            return jsonify({'id': str(resume.id)}, 200)
        except Exception as e:
            print(e)
            return jsonify({'message': 'Error uploading resume'}), 500
    else:
        return jsonify({'message': '/resume/upload only allows POST'}), 405


@app.route('/resumes/<id>', methods=['GET', 'DELETE'])
@cross_origin(supports_credentials=True)
def getResume(id):
    if (not ObjectId.is_valid(id)):
        return jsonify({'message': 'Id is not a valid ObjectId, must be a 12-byte input or 24-character hex string'}), 400
    if request.method == 'GET':
        try:
            resume = Resume.objects.get(id=id)
            return Response(resume.file_data, mimetype="application/pdf"), 200
        except Resume.DoesNotExist:
            return jsonify({'message': 'Resume not found'}), 404
        except Exception as e:
            print(e)
            return jsonify({'message': 'Error getting resume'}), 500
    elif request.method == 'DELETE':
        try:
            resume = Resume.objects.get(id=id)
            resume.delete()
            return jsonify({'message': 'Resume deleted successfully'}), 200
        except Resume.DoesNotExist:
            return jsonify({'message': 'Resume not found'}), 404
        except Exception as e:
            print(e)
            return jsonify({'message': 'Error deleting resume'}), 500
    else:
        return jsonify({'message': '/resume/:id only allows GET'}), 405

@app.route('/resumes/<id>/analyze', methods=['GET'])
@cross_origin(supports_credentials=True)
def analyzeResume(id):
    if (not ObjectId.is_valid(id)):
        return jsonify({'message': 'Id is not a valid ObjectId, must be a 12-byte input or 24-character hex string'}), 400
    if request.method == 'GET':
        resume = Resume.objects.get(id=id)
        resume_data = io.BytesIO(resume.file_data)
        try:
            result = fr.extract(resume_data)
        except Exception as e:
            print(e)
            return jsonify({'message': 'Error analyzing resume'}), 500
        wc = 0
        allText = ''
        for page in result:
            for line in page.lines:
                allText += line.text + '\n'
        wc = len(allText.split())
        return jsonify({ 'resume': allText, 'wordCount': wc }), 200
    return jsonify({'message': 'Error analyzing resume'})

@app.route('/resumes', methods=['GET'])
@cross_origin(supports_credentials=True)
def getResumes():
    if request.method == 'GET':
        try:
            resumes = Resume.objects().only('id')
            return jsonify({'resumes': resumes}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': 'Error getting resumes'}), 500
    else:
        return jsonify({'message': '/resumes only allows GET'}), 405

