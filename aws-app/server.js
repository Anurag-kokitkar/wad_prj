const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("AWS Elastic Beanstalk Deployment Successful");
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});