
# AI Image Classifier

This project implements an AI-powered image classification web application, utilizing AWS services like S3 for storage, Rekognition for image classification, and Lambda for processing. It also includes a Dockerized frontend for the user interface and backend API.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Frontend](#frontend)
- [Backend](#backend)
- [Docker](#docker)
- [AWS Setup](#aws-setup)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Project Overview
This project allows users to upload images, which are processed by AWS Rekognition to classify the image and store relevant information in an S3 bucket. The system is built using AWS Lambda for serverless computation, and CloudFront is used for content delivery. The frontend is built with React, and the backend uses Express and Node.js.

## Tech Stack
- **Frontend**: React, Axios
- **Backend**: Node.js, Express, AWS SDK
- **Database**: AWS S3 (for storing images)
- **Cloud**: AWS Lambda, AWS Rekognition, AWS S3, AWS CloudFront
- **Docker**: For containerization of the application

## Setup

### Prerequisites
- Node.js and npm
- Docker (optional for containerized development)
- AWS CLI (for setting up AWS services)
- Access to an AWS account with appropriate IAM roles

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repository/ai-image-classification.git
    cd ai-image-classification/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

    The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd ai-image-classification/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables (e.g., AWS credentials, S3 bucket names, etc.) in a `.env` file.

4. Start the server:
    ```bash
    npm start
    ```

    The backend API will be available at [http://localhost:4000](http://localhost:4000).

### Docker

To run the project using Docker, follow these steps:

1. Build the Docker images:
    ```bash
    docker-compose build
    ```

2. Run the containers:
    ```bash
    docker-compose up
    ```

    The frontend and backend will be accessible at their respective ports.

### AWS Setup

To properly set up AWS services, ensure you have the necessary permissions for the following:

1. **S3**: Create a bucket for storing images.
2. **Rekognition**: Set up Rekognition for image analysis.
3. **Lambda**: Create Lambda functions for image processing.

Make sure your AWS credentials are configured using the AWS CLI.

## Testing

To test the application locally, you can upload images through the frontend UI and check the response from the backend. For the backend, you can write unit tests using Mocha or Jest.

### Common Issues
- **500 Internal Server Error**: Ensure AWS credentials and environment variables are correctly configured.
- **Access Denied**: Check IAM permissions for S3 and Rekognition.