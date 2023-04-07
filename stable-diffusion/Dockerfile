FROM python:3.10-slim-bullseye

# Set the working directory in the container
WORKDIR /server

# Copy the requirements file into the container
COPY . /server

# Install the dependencies
RUN apt-get update && apt-get install -y git
RUN pip install -r /server/requirements.txt

# Expose the port that the application will run on
EXPOSE 8000

# Set the entry point command for the container
CMD python ./stability-sdk/src/stability_sdk/app.py