const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg'
};

const server = http.createServer((req, res) => {
  // URL에서 쿼리 파라미터를 먼저 제거한 후에 파일 경로를 파악합니다.
  const cleanUrl = req.url.split('?')[0];

  // [신규] 내 PC 다운로드 폴더에 직접 파일 저장 API
  if (req.method === 'POST' && cleanUrl === '/save-to-downloads') {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const filename = parsedUrl.searchParams.get('filename') || 'healing_bgm.wav';
    
    const userProfile = process.env.USERPROFILE || 'C:\\Users\\USER';
    const possiblePaths = [
      path.join(userProfile, 'Downloads'),
      path.join(userProfile, 'OneDrive', 'Downloads'),
      path.join(userProfile, 'OneDrive', '다운로드')
    ];
    
    let targetDir = possiblePaths[0];
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        targetDir = p;
        break;
      }
    }
    
    const targetPath = path.join(targetDir, filename);
    const dataChunks = [];
    
    req.on('data', chunk => {
      dataChunks.push(chunk);
    });
    
    req.on('end', () => {
      const fileBuffer = Buffer.concat(dataChunks);
      try {
        fs.writeFileSync(targetPath, fileBuffer);
        res.writeHead(200, { 
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: true, savedPath: targetPath }));
      } catch (err) {
        console.error('Desktop save error:', err);
        res.writeHead(500, { 
          'Content-Type': 'application/json; charset=utf-8' 
        });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  let filePath = path.join(__dirname, cleanUrl === '/' ? 'index.html' : cleanUrl);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
