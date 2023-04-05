from celery import Celery
from azure.core.exceptions import ResourceNotFoundError
from dotenv import find_dotenv, load_dotenv
from flask_mongoengine import MongoEngine
from os import environ as env
import re
import hashlib

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
meilisearchService = meilisearch.Client('http://67.207.76.177:7700')

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
    phoneNumber = "2891234567"
    if results['Phone']:
        phoneNumber = results['Phone']
    digits = re.findall('\d+', phoneNumber)
    digits = ''.join(digits)
    ds = '0.' + digits[-4:] if digits else '0.3'
    light = '0.' + digits[-5:] if digits else '0.7'
    c['dotSize'] = float(ds)
    c['light'] = float(light)
    c['irrationalDenominator'] = p5Denom[results['Email'].split('@')[1].split('.')[0]] if results['Email'] in p5Denom else p5Denom['default']
    c['shapeCount'] = int(results['wordCount']) * 2
    c['frames'] = len(results['Name']) * 66 if results['Name'] else 66
    c['bgColor'] = hash_string_to_rgb(results['buzzwords']) if results['buzzwords'] else 'rgb(255, 255, 255)'
    return c

def hash_string_to_rgb(s):
    # Hash the string using the MD5 algorithm
    hash_val = hashlib.md5(s.encode('utf-8')).hexdigest()

    # Convert the hash value to RGB color components
    r = int(hash_val[:2], 16)
    g = int(hash_val[2:4], 16)
    b = int(hash_val[4:6], 16)

    return 'rgb(' + str(r) + ', ' + str(g) + ', ' + str(b) + ')'

def getApp():
    return worker
