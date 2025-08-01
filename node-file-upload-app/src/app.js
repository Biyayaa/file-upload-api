const express = require('express');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/uploads', uploadRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});