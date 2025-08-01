const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const {
  uploadSingle,
  uploadMultiple,
  uploadMultipleFields
} = require('../controllers/uploadController');

// Single file upload
router.post('/upload/single', upload.single('file'), uploadSingle);

// Array of files under one field
router.post('/upload/multiple', upload.array('files', 10), uploadMultiple);

// Multiple fields with arrays
router.post('/upload/multifields', upload.fields([
  { name: 'photos', maxCount: 5 },
  { name: 'docs', maxCount: 5 }
]), uploadMultipleFields);

module.exports = router;