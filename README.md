# SLIP 1 - Sample Application Files

This folder contains sample application files for SLIP 1, Question 2 (Docker Exercise).

## Contents

### Python Option
- `app.py` - Simple Flask web application
- `requirements.txt` - Python dependencies
- `Dockerfile.python` - Dockerfile for Python application

**Build and run Python version:**
```bash
docker build -f Dockerfile.python -t myapp:python .
docker run -d -p 5000:5000 --name myapp-python myapp:python
```

### Node.js Option
- `server.js` - Simple Node.js web application
- `package.json` - Node.js dependencies
- `Dockerfile.node` - Dockerfile for Node.js application

**Build and run Node.js version:**
```bash
docker build -f Dockerfile.node -t myapp:node .
docker run -d -p 3000:3000 --name myapp-node myapp:node
```

## Testing

Access the applications:
- Python: http://localhost:5000
- Node.js: http://localhost:3000

Health check endpoints:
- Python: http://localhost:5000/health
- Node.js: http://localhost:3000/health

