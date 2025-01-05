const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// AWS Configuration
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const rekognition = new AWS.Rekognition();

// Image Upload Endpoint
app.post('/upload', upload.single('image'), async (req, res) => {
    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: `uploads/${Date.now()}_${req.file.originalname}`,
        Body: req.file.buffer,
        ContentType: req.file.mimetype
    };

    try {
        await s3.putObject(params).promise();
        const rekognitionParams = {
            Image: {
                S3Object: {
                    Bucket: process.env.S3_BUCKET,
                    Name: params.Key
                }
            }
        };
        const result = await rekognition.detectLabels(rekognitionParams).promise();
        res.json({ message: 'Image uploaded', labels: result.Labels });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to upload or analyze image' });
    }
});

app.listen(4000, () => {
    console.log('Backend running on port 4000');
});
