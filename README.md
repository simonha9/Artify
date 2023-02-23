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

On the backend, there will be use of pdf parsing and form recognizing technology to extract quantitative values from the texts in order to generate images. There will also be full text searching capabilities to find all images generated from relevant text.

## Complexity Points

- p5.js (2)
  - Used to generate abstract art from the user inputted pdfs/raw text.
- form recognizer (1)
  - For parsing of the pdf. Can be used to obtain quantitative values for image generation purposes.
- pdf.js (2)
  - to show the pdf on browser alongside generated art (before and after)
- auth0 (1)
  - For user authentication and RBAC
- MongoDB (2)
  - For storing and managing JSON documents used for the image generation and user details.
- blob storage (1)
  - Blob storage for saving pdf files or other large files, as well as thumbnauils / image storage
- meilisearch (2)
  - mass search for text from all documents - return documents/images that match keywords (like elasticsearch)

### Challenge Points

- stable diffusion (3)
  - for more complex images and a different style

## Completion Plan

These goals are subject to change. Note that those marked with (C) are challenge factors.

### Alpha Version

For this version, we are aiming for a minimum viable product. This includes:

- basic account creation (BE)
- mockups of final ui/ux design
- uploading pdfs
- basic image generation from parsed pdf (1 style)
- basic ui elements
- basic storage for pdfs/json/users - barebones
- stable diffusion PoC (C)

### Beta Version

- handling different user types and permissions (back-end)
- increased complexity in image generation
  - p5 with animations/interactivity
  - stable diffusion mapping for resumes (C)
- blob storage for pdf files, thumbnails
- searching text content with meilisearch
- full storage

### Final Version

- improved styling
- permissions (front-end)
- landing page that shows view of generated images
- confirmation emails
- action/request logging
- full image complextiy with p5 and stable diffusion (C)
