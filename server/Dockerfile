FROM python:3.10-slim-bullseye

# Set the working directory in the container
WORKDIR /server

# Copy the requirements file into the container
COPY requirements.txt /server/
COPY start_celery.sh /server/

# Install the dependencies
RUN pip install -r requirements.txt
RUN apt-get update && apt-get install -y rabbitmq-server

# Copy the application code into the container
COPY . /server

# Expose the port that the application will run on
EXPOSE 8080 5672 15672


# Set the environment variable for Flask
ENV FLASK_APP=__init__.py

# Set the entry point command for the container
CMD rabbitmq-server -detached && chmod +x /server/start_celery.sh && /server/start_celery.sh && flask run --host=0.0.0.0 --port 8080
