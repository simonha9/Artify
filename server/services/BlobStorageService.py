from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient
from server import env
import uuid

class BlobStorageService:
    def __init__(self):
        self.connection_string = env.get('AZURE_STORAGE_CONNECTION_STRING')
        self.blob_service_client = BlobServiceClient.from_connection_string(self.connection_string)
        self.container_name = env.get('AZURE_STORAGE_CONTAINER_NAME')
        self.container_client = self.blob_service_client.get_container_client(self.container_name)
    
    def upload(self, fileStream, userId):
        blobId = str(uuid.uuid4())
        blob_client = self.container_client.get_blob_client(blobId)
        blob_client.upload_blob(fileStream, overwrite=True, metadata={'userId': userId})
        return blobId
    
    def download(self, blobId):
        blob_client = self.container_client.get_blob_client(blobId)
        return blob_client.download_blob().content_as_bytes()
    
    def delete(self, blobId):
        blob_client = self.container_client.get_blob_client(blobId)
        blob_client.delete_blob()
