const mongoose = require('mongoose');

// Get the MongoDB URI from the environment variable or use a default value
const uri = "mongodb+srv://manju_16:16-Dec-03@mern.an1dulf.mongodb.net/?retryWrites=true&w=majority&appName=MERN";

// Connect to MongoDB using the provided URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform further operations
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
    // Handle the error appropriately
  });
