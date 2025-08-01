const cloudinary = require('../config/cloudinary');
const multer = require('multer');

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload a single file
exports.uploadSingleFile = async (req, res) => {
    try {
        const file = req.file;
        const result = await cloudinary.uploader.upload(file.buffer, {
            resource_type: 'auto'
        });
        res.status(200).json({ url: result.secure_url });
    } catch (error) {
        res.status(500).json({ error: 'File upload failed', details: error.message });
    }
};

// Upload an array of files for a single field
exports.uploadMultipleFilesSingleField = async (req, res) => {
    try {
        const files = req.files;
        const uploadPromises = files.map(file => cloudinary.uploader.upload(file.buffer, {
            resource_type: 'auto'
        }));
        const results = await Promise.all(uploadPromises);
        const urls = results.map(result => result.secure_url);
        res.status(200).json({ urls });
    } catch (error) {
        res.status(500).json({ error: 'File upload failed', details: error.message });
    }
};

// Upload multiple fields with arrays of files
exports.uploadMultipleFields = async (req, res) => {
    try {
        const fields = req.files;
        const uploadPromises = Object.keys(fields).flatMap(field => 
            fields[field].map(file => cloudinary.uploader.upload(file.buffer, {
                resource_type: 'auto'
            }))
        );
        const results = await Promise.all(uploadPromises);
        const urls = results.map(result => result.secure_url);
        res.status(200).json({ urls });
    } catch (error) {
        res.status(500).json({ error: 'File upload failed', details: error.message });
    }
};

// Export multer middleware for use in routes
exports.upload = upload;