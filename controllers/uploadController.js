const cloudinary = require('../config/cloudinary');

// Helper function to upload a single file buffer
const uploadToCloudinary = async (fileBuffer, filename) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ public_id: filename, resource_type: 'raw' }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    }).end(fileBuffer);
  });
};

exports.uploadSingle = async (req, res) => {
  try {
    const result = await uploadToCloudinary(req.file.buffer, req.file.originalname);
    res.json({ message: 'File uploaded successfully', url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed', details: err.message });
  }
};



exports.uploadMultiple = async (req, res) => {
  try {
    const files = req.files;
    const results = await Promise.all(files.map(file =>
      uploadToCloudinary(file.buffer, file.originalname)
    ));
    res.json({ message: 'Files uploaded', urls: results.map(r => r.secure_url) });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed', details: err.message });
  }
};

exports.uploadMultipleFields = async (req, res) => {
  try {
    const allFiles = [...(req.files.photos || []), ...(req.files.docs || [])];
    const results = await Promise.all(allFiles.map(file =>
      uploadToCloudinary(file.buffer, file.originalname)
    ));
    res.json({ message: 'Multiple fields uploaded', urls: results.map(r => r.secure_url) });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed', details: err.message });
  }
};
