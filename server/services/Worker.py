from celery import Celery
from azure.core.exceptions import ResourceNotFoundError
from dotenv import find_dotenv, load_dotenv
from os import environ as env

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

from .FormRecognizerService import FormRecognizerService
from .BlobStorageService import BlobStorageService
import meilisearch

worker = Celery('worker', broker='pyamqp://guest@localhost//', backend='rpc://')
fr = FormRecognizerService.getInstance()
bs = BlobStorageService.getInstance()
meilisearchService = meilisearch.Client(env.get('MEILISEARCH_URL') or 'http://localhost:7700')

@worker.task(name='server.services.Worker.addResume')
def addResume(rid, metadata, content_type):
    try:
        file = bs.download(rid)
        result = fr.extract(file, content_type)
        res = fr.analyzeResults(result)
        res['id'] = rid
        for key in metadata:
            res[key] = metadata[key]
        meilisearchService.index('resumes').add_documents(res)
        return "Processing completed, resume analyzed and indexed"
    except Exception as e:
        print(e, 'Error adding resume in worker, aborted')