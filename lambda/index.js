const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

exports.handler = async (event) => {
    const { bucket, key } = JSON.parse(event.body);

    const params = {
        Image: {
            S3Object: {
                Bucket: bucket,
                Name: key
            }
        }
    };

    const result = await rekognition.detectLabels(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(result.Labels)
    };
};