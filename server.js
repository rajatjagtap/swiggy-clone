const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port

// Middleware to allow CORS
app.use(cors());

// Serve static files (images) from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Function to read categories from JSON file
const getCategories = () => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'categories.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading categories file:', error);
        throw error;
    }
};

// Function to read restaurant chains from JSON file
const getRestaurantChains = () => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'restaurantChains.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading restaurant chains file:', error);
        throw error;
    }
};

// Define the /categories route
app.get('/categories', (req, res) => {
    try {
        const categories = getCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Define the /restaurantChains route
app.get('/restaurantChains', (req, res) => {
    console.log('Received request for /restaurantChains');
    try {
        const restaurantChains = getRestaurantChains();
        console.log('Restaurant chains data:', restaurantChains);
        res.json(restaurantChains);
    } catch (error) {
        console.error('Error reading restaurant chains:', error);
        res.status(500).send('Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
