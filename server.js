/**
 * Simple Node.js Web Application
 * For SLIP 1 - Docker Exercise (Node.js Option)
 */

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: 'Welcome to the Simple Web Application',
            status: 'running',
            version: '1.0.0'
        }));
    } else if (req.url === '/health') {
        res.statusCode = 200;
        res.end(JSON.stringify({ status: 'healthy' }));
    } else if (req.url === '/api/users') {
        res.statusCode = 200;
        res.end(JSON.stringify([
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        ]));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});

