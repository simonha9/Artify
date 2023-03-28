from celery import Celery
from azure.core.exceptions import ResourceNotFoundError
from dotenv import find_dotenv, load_dotenv
from flask_mongoengine import MongoEngine
from os import environ as env

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

from .FormRecognizerService import FormRecognizerService
from .BlobStorageService import BlobStorageService
import meilisearch

worker = Celery('worker', broker='pyamqp://guest@localhost//', backend='rpc://')
worker.conf.task_track_started = True
worker.conf.task_ignore_result = False

fr = FormRecognizerService.getInstance()
bs = BlobStorageService.getInstance()
meilisearchService = meilisearch.Client(env.get('MEILISEARCH_URL') or 'http://localhost:7700')

p5Denom = {
    'yahoo': '6.28318530718',
    'hotmail': '3.14159265359',
    'outlook': '2.71828182845',
    'gmail': '1.61803398874',
    'default': '1.41421356237'
}

@worker.task(name='server.services.Worker.addResume')
def addResume(rid, metadata, content_type):
    try:
        file = bs.download(rid)
        result = fr.extract(file, content_type)
        res = fr.analyzeResults(result)

        p5Config = generateP5Config(metadata, res)
        res['id'] = rid
        for key in p5Config:
            res[key] = p5Config[key]
        
        meilisearchService.index('resumes').add_documents(res)
        return "Processing completed, resume analyzed and indexed"
    except Exception as e:
        print(e, 'Error adding resume in worker, aborted')

@worker.task(name='server.services.Worker.setTaskId')
def setTaskId(rid, taskId):
    try:
        document = {'task': taskId, 'rid': str(rid)}
        taskUid = meilisearchService.index('tasks').add_documents(document)
        return "Task ID updated, task UID: " + str(taskUid)
    except Exception as e:
        print(e, 'Error updating resume in worker, aborted')

def generateP5Config(config, results):
    c = config.copy()
    ds = '0.' + results['Phone'][-4:] if results['Phone'] else '0.3'
    c['dotSize'] = float(ds)
    c['irrationalDenominator'] = p5Denom[results['Email'].split('@')[1].split('.')[0]] if results['Email'] in p5Denom else p5Denom['default']
    c['shapeCount'] = int(results['wordCount']) * 2
    c['frames'] = len(results['Name']) * 66
    return c

def getApp():
    return worker