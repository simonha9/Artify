#!/bin/bash

cd ..
# Run command in the background
celery -A server.services.Worker worker -l info -P eventlet --detach
