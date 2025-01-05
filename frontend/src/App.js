import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // We will create this file to style our components

function App() {
    const [file, setFile] = useState(null);
    const [labels, setLabels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);
        setError(null);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await axios.post('http://localhost:4000/upload', formData);
            setLabels(res.data.labels);
        } catch (err) {
            setError('Error uploading image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app-container">
            <h1 className="title">AI Image Classifier</h1>
            <div className="upload-section">
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="file-input"
                />
                <button 
                    onClick={handleUpload} 
                    className="upload-button"
                    disabled={loading}
                >
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="labels-section">
                {labels.length > 0 && (
                    <h2>Detected Labels:</h2>
                )}
                {labels.map((label, index) => (
                    <p key={index} className="label">
                        {label.Name} ({Math.round(label.Confidence)}%)
                    </p>
                ))}
            </div>
        </div>
    );
}

export default App;