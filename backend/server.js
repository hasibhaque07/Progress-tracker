import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5002, () => {
    console.log('Server is running on port 5002');
});