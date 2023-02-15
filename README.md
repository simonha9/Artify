Please use this repository for project files.

- Do not publish your project code to a public repository.
- You must only write your project proposal in this `README.md`

This README.md is to be replaced by your project proposal:

- Project title and team name
- Your focus (frontend focused or backend focused)
- Team members with student numbers
- Description of the web application
- What complexity points will this project contain
- (optional) What complexity points will be attempted as bonus for the challenge factor
- What you aim to complete for the alpha version, beta version, and final version

# Project Title: Placeholder super cool mega project

## Team Name: stomach pain

## Focus
This application is front-end focused.

## Team Members
* Terry Chin Long Wong - 1005153067
* Simon
* Kai

## Description
Our idea is to create a social media web app with user generated content. The idea is to have users input pdf files or raw text input which will then be processed to generate abstract art using a js library used for generating images.

Users will have the ability to create accounts to share and view other user's generated content. Social features such as liking and following may also be implemented. There will also be a front page for viewing top user generated content as well as a page to view content from users that the current user follows. Optionally, users can also opt into receiving email or SMS messages/notifications for in-app events such as when someone follows you. 

On the backend, there will be use of pdf parsing and form recognizing technology to extract quantitative values from the texts in order to generate images. 

## Complexity Points
* pdf.js (2)
  * Used to parse user inputted pdf files into manipulatable and readable text/strings. Potentially used for allowing users to view their inputted pdf files.
* p5.js (2)
  * Used to generate abstract art from the user inputted pdfs/raw text 
* form recognizer (1)
  * For further parsing of the text data extracted from user input. Can be used to obtain quantiative values for image generation purposes. 
* sendgrid (1)
  * Delivering emails to users for email verification or general notifications about in-app activiy.
* auth0 (1)
  * For user authentication and RBAC
* sharedb (2)
  * For storing and managing JSON documents used for the image generation.

### Potential Challenge Points
* cellery or bee-queue
  * Task queue for confirmation emails and potentially logging
* twilio
  * Delivering SMS messages to users for email verification or generaal notifications about in-app activity.

## Completion Plan
### Alpha Version
For this version, we want most of the social aspect of the app to be complete as well as the data parsing. We want to have the ability to view other user's pdfs as well as a basic account creation.

We hope to have the basic UI laid out with the various pages and some styling. We are also aiming to have some basic image generation working using p5.js. As for the backend, we are looking to have our routes setup and access to our sharedb database. 

### Beta Version

### Final Version
