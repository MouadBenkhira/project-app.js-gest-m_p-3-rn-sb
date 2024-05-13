const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
