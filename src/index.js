require('dotenv').config();
const express = require('express');
const routes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/bfhl', routes);
app.get('/health', (req, res) => {
    res.status(200).json({ is_success: true, official_email: 'vipin1589.be23@chitkarauniversity.edu.in' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});