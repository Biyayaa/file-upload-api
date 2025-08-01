# Node File Upload App

This project is a Node.js application that allows users to upload files to Cloudinary. It uses Express for the server framework and Multer for handling file uploads.

## Features

- Upload a single file
- Upload an array of files for a single field
- Upload multiple fields with arrays of files

## Technologies Used

- Node.js
- Express
- Multer
- Cloudinary
- dotenv

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd node-file-upload-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   Copy the `.env` template and fill in your Cloudinary credentials:

   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   PORT=3000
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The application will start on the port specified in the `.env` file (default is 3000).

## API Endpoints

- **Upload a single file:**
  - `POST /upload/single`
  
- **Upload an array of files for a single field:**
  - `POST /upload/multiple`
  
- **Upload multiple fields with arrays of files:**
  - `POST /upload/fields`

## Deployment

This application can be deployed on Render.com. Follow the Render documentation for deploying Node.js applications.

## License

This project is licensed under the MIT License.