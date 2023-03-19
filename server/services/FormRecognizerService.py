import os
from azure.core.exceptions import ResourceNotFoundError
from azure.ai.formrecognizer import FormRecognizerClient, FormTrainingClient
from azure.core.credentials import AzureKeyCredential
from server import env


class FormRecognizerService:
    __instance = None
    endpoint = env.get('MS_FORM_RECOGNIZER_ENDPOINT')
    key = env.get('MS_FORM_RECOGNIZER_key')
    custom_model_id = env.get('MS_FORM_RECOGNIZER_CUSTOM_MODEL_ID')
    form_recognizer_client = None


    def __init__(self):
        if FormRecognizerService.__instance is not None:
            raise Exception("This class is a singleton!")
        self.form_recognizer_client = FormRecognizerClient(
            endpoint=self.endpoint, credential=AzureKeyCredential(self.key))
        FormRecognizerService.__instance = self
    
    @staticmethod
    def getInstance():
        if FormRecognizerService.__instance is None:
            FormRecognizerService()
        return FormRecognizerService.__instance
        
    def extract(self, stream, contentType):
        poller = self.form_recognizer_client.begin_recognize_content(stream, content_type=contentType)
        result = poller.result()
        return result
    
    def analyzeResults(self, result):
        res = {}
        wc = 0
        allText = ''
        for page in result:
            for line in page.lines:
                allText += line.text + '\n'
        res['text'] = allText
        wc = len(allText.split())
        res['wordCount'] = wc
        return res
