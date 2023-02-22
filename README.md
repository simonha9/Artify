# Project Title: Zusa

### Team Name: stomach pain

## Focus

This application is front-end focused.

## Team Members

- Terry Chin Long Wong - 1005153067
- Simon Ha - 1004929116
- Kai Lin - 1006903040

## Description

Our idea is to create an abstract art representation of user uploaded files. Users will create accounts and upload resumes (pdfs), and generate interactive/animated absttact art with different styles based on quantifications from the resume. This could include information such as user contact info, employment information (dates, companies, buzz words, quantifications).

On the backend, there will be use of pdf parsing and form recognizing technology to extract quantitative values from the texts in order to generate images.

## Complexity Points

- pdf.js (2)
  - Used to parse user inputted pdf files into manipulatable and readable text/strings. Potentially used for allowing users to view inputted pdf files.
- p5.js (2)
  - Used to generate abstract art from the user inputted pdfs/raw text.
- form recognizer (1)
  - For further parsing of the text data extracted from user input. Can be used to obtain quantitative values for image generation purposes.
- auth0 (1)
  - For user authentication and RBAC
- sharedb (2)
  - For storing and managing JSON documents used for the image generation and user details.
- blob storage (1)
  - Blob storage for saving pdf files or other large files, as well as thumbnauils

### Potential Challenge Points

- cellery or bee-queue (2)
  - Task queue for confirmation emails and potentially logging

## Completion Plan

These goals are subject to change.

### Alpha Version

For this version, we are aiming for a minimum viable product. This includes:

- basic account creation (BE)
- mockups of final ui/ux design
- uploading pdfs
- basic image generation from parsed pdf (1 style)
- storage in sharedb
- basic ui elements

### Beta Version

- handling different user types and permissions (back-end)
- increased complexity in image generation
  - possibly multiple images, animations, interactivity
- blob storage for pdf files, thumbnails

### Final Version

- improved styling
- permissions (front-end)
- email verification
- landing page that shows view of generated images
