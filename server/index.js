const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, '..', 'dist')));

const routes = require('./routes')
app.use('/', routes);

/** Get port from environment and store in Express. */
const port = process.env.PORT || '8080';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, '0.0.0.0', () => console.log(`Server Running on port ${port}`))