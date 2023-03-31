Recommended to run server in virtual env, install if you don't have

1. in server/ dir, run 'pipenv shell'
2. run 'pipenv install' or optionally 'install -r requirements.txt', doesn't have everything yet will figure out
3. run 'flask --app . run --debug -h localhost -p 8080' and you are serving BE on 8080

To get Mongo running

1. Download Mongo Compass
2. go to .env file and look for MONGODB_URI, copy this string into Mongo Compass

To get Meilisearch running

1. Run this curl command

curl -L https://install.meilisearch.com/ | sh

2. should be able to just run ./meilisearch.sh script, ignore master key warning, used for auth

To get Celery running

1. First install rabbitmq, if you're on windows I recommend installing through Chocolatey
   - install Chocolatey
   - run 'choco install rabbitmq'
   - on Windows, you might need to manually set PATH env variable, find your rabbitmq installation, for me
     it was 'C:/Users/<user>/Program Files/RabbitMQ Server/<version>/sbin, save this in system environment variables under PATH
   - you can check if rabbitmq is available globally by running 'rabbitmqctl' in powershell
   - you can also check whether there is a server running by running 'rabbitmq-server status' in powershell
2. Install Celery
   - 'pipenv install celery'
3. Install eventlet
   - 'pipenv install eventlet'
4. Run Celery worker
   - open ANOTHER console
   - go to server directoy, this is /project-stomach-pain/server and then run `pipenv shell`
   - check that rabbitmq is running by above
   - go back to project directory `cd ..`
   - run 'celery -A server.services.Worker worker -l info -P eventlet'
   - in startup console, look for this line: \[tasks\] . server.services.Worker.addResume and this line: Connected to amqp://guest:\*\*@127.0.0.1:5672//
   - if you get an error make sure you are in the ROOT directory, not in /server (go one level up)

So we should have:

- 1 console for FE to run Angular
- 1 console to run BE with Flask
- 1 console for Meilisearch through wsl
- 1 console for Celery Worker
