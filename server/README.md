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
