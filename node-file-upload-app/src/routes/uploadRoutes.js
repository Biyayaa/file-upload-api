const express = require('express');
const multer = require('../middleware/multer');
const uploadController = require('../controllers/uploadController');

const router = express.Router();

// Route for uploading a single file
router.post('/upload/single', multer.single('file'), uploadController.uploadSingleFile);

// Route for uploading an array of files for a single field
router.post('/upload/multiple', multer.array('files', 10), uploadController.uploadMultipleFiles);

// Route for uploading multiple fields with arrays of files
router.post('/upload/multiple-fields', multer.fields([{ name: 'images', maxCount: 10 }, { name: 'documents', maxCount: 10 }]), uploadController.uploadMultipleFields);

module.exports = router;