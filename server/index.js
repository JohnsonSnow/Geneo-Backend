const express = require('express');
const getRoutes = require('./routes');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/api', getRoutes());

// All routes that don't match api will be caught by this route
app.get('*', function (req, res) {
  res.status(404).json({ statusCode: 404, message: 'Route Not Found' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
