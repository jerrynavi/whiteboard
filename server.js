// Simple Express server for SSR

const express = require('express');
const RateLimit = require('express-rate-limit');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const limiter = new RateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 1000,
});

app.use(limiter);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
    console.log('App is running on port: ' + port);
});