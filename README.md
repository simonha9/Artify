# Project Title: Zusa

### Team Name: stomach pain

## Focus

This application is front-end focused.

## Team Members

- Terry Chin Long Wong - 1005153067
- Simon Ha - 1004929116
- Kai Lin - 1006903040

## Description

Our idea is to create a social media web app with user generated content. The idea is to have users input pdf files or raw text input which will then be processed to generate abstract art using a js library used for generating images.

Users will have the ability to create accounts to share and view other user's generated content. Social features such as liking and following may also be implemented. There will also be a front page for viewing top user generated content as well as a page to view content from users that the current user follows. Optionally, users can also opt into receiving email or SMS messages/notifications for in-app events such as when someone follows you.

On the backend, there will be use of pdf parsing and form recognizing technology to extract quantitative values from the texts in order to generate images.

## Complexity Points

- pdf.js (2)
  - Used to parse user inputted pdf files into manipulatable and readable text/strings. Potentially used for allowing users to view inputted pdf files.
- p5.js (2)
  - Used to generate abstract art from the user inputted pdfs/raw text.
- form recognizer (1)
  - For further parsing of the text data extracted from user input. Can be used to obtain quantitative values for image generation purposes.
- sendgrid (1)
  - Delivering emails for general notifications about in-app activity.
- auth0 (1)
  - For user authentication and RBAC
- sharedb (2)
  - For storing and managing JSON documents used for the image generation and user details.
- blob storage (1)
  - Blob storage for saving pdf files or other large files.

### Potential Challenge Points

- cellery or bee-queue (2)
  - Task queue for confirmation emails and potentially logging
- twilio (1)
  - Delivering SMS messages to users for email verification or general notifications about in-app activity.

## Completion Plan

These goals are subject to change.

### Alpha Version

For this version, we are aiming for a minimum viable product. This includes:

- basic account creation
- mockups of final ui/ux design
- uploading pdfs
- basic image generation from parsed pdf
- storage in sharedb
- basic ui elements

### Beta Version

- social media aspect (back-end)
  - following, liking, searching
- handling different user types and permissions (back-end)
- increased complexity in image generation
  - possibly multiple images, animations, interactivity
- blob storage for pdf files

### Final Version

- improved styling
- social media aspect (front-end)
- permissions (front-end)
- email verification/notification
- pages for popular content and subscribed/followed content
