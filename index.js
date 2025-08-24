const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Real Estate Platform</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          margin: 40px; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container { 
          max-width: 800px; 
          margin: 0 auto; 
          text-align: center;
        }
        h1 { font-size: 3em; margin-bottom: 20px; }
        p { font-size: 1.2em; margin-bottom: 30px; }
        .status { 
          background: rgba(255,255,255,0.1); 
          padding: 20px; 
          border-radius: 10px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🏠 Real Estate Platform</h1>
        <p>Welcome to your real estate platform application!</p>
        <div class="status">
          <h3>🚀 Application Status</h3>
          <p>✅ Server is running successfully</p>
          <p>✅ Docker container is working</p>
          <p>✅ Ready for development</p>
        </div>
        <p><small>Built with Node.js and Docker</small></p>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Real Estate Platform server running on port ${PORT}`);
  console.log(`🌐 Open http://localhost:${PORT} in your browser`);
});
