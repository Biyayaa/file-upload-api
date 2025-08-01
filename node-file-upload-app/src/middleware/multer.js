const multer = require('multer');

// Set up storage options for multer
const storage = multer.memoryStorage();

// Set up file size limits and file filter
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limit files to 5MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/; // Allowed file types
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(file.originalname.split('.').pop().toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Error: File type not supported!'));
    }
});

// Export the multer upload middleware
module.exports = upload;