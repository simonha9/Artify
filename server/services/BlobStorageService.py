from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient
from os import environ as env

class BlobStorageService:

    __instance = None
    blob_service_client = None
    container_client = None

    def __init__(self):
        if BlobStorageService.__instance is not None:
            raise Exception("This class is a singleton!")
        
        self.connection_string = env.get('AZURE_STORAGE_CONNECTION_STRING')
        self.blob_service_client = BlobServiceClient.from_connection_string(self.connection_string)
        self.container_name = env.get('AZURE_STORAGE_CONTAINER_NAME')
        self.container_client = self.blob_service_client.get_container_client(self.container_name)
        BlobStorageService.__instance = self

    @staticmethod
    def getInstance():
        if BlobStorageService.__instance is None:
            BlobStorageService()
        return BlobStorageService.__instance
    
    def upload(self, blobId, fileStream, metadata):
        blob_client = self.container_client.get_blob_client(blobId)
        blob_client.upload_blob(fileStream, overwrite=True, metadata=metadata)
        return blobId
    
    def download(self, blobId):
        blob_client = self.container_client.get_blob_client(blobId)
        return blob_client.download_blob().content_as_bytes()
    
    def delete(self, blobId):
        blob_client = self.container_client.get_blob_client(blobId)
        blob_client.delete_blob()
    
    def getAllBlobs(self):
        blobs = self.container_client.list_blobs()
        resumes = []
        for blob in blobs:
            b = self.container_client.get_blob_client(blob.name)
            metadata = b.get_blob_properties().metadata
            r = {}
            r['id'] = blob.name
            r['title'] = metadata['title'] if 'title' in metadata else ''
            r['user'] = metadata['user']
            resumes.append(r)
        return resumes

