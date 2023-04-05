import os
from azure.ai.formrecognizer import DocumentAnalysisClient, DocumentModelAdministrationClient
from azure.core.credentials import AzureKeyCredential
from os import environ as env


class FormRecognizerService:
    __instance = None
    endpoint = env.get('MS_FORM_RECOGNIZER_ENDPOINT')
    key = env.get('MS_FORM_RECOGNIZER_KEY')
    custom_model_id = env.get('MS_FORM_RECOGNIZER_CUSTOM_MODEL_ID')
    document_analysis_client = None
    document_model_administration_client = None

    def __init__(self):
        if FormRecognizerService.__instance is not None:
            raise Exception("This class is a singleton!")
        self.document_analysis_client = DocumentAnalysisClient(
            endpoint=self.endpoint, credential=AzureKeyCredential(self.key))
        self.document_model_administration_client = DocumentModelAdministrationClient(
            endpoint=self.endpoint, credential=AzureKeyCredential(self.key))
        FormRecognizerService.__instance = self
    
    @staticmethod
    def getInstance():
        if FormRecognizerService.__instance is None:
            FormRecognizerService()
        return FormRecognizerService.__instance
        
    def extract(self, stream, contentType):
        poller = self.document_analysis_client.begin_analyze_document(
            self.custom_model_id, stream)
        result = poller.result()
        return result
    
    def analyzeResults(self, result):
        res = {}
        wc = 0
        for idx, document in enumerate(result.documents):
            for name, field in document.fields.items():
                field_value = field.value if field.value else field.content
                res[name] = field_value
                wc += len(field_value.split() if field_value else '')
        res['wordCount'] = wc
        return res
