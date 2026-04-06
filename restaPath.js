// restaPath.js  –  http://localhost:3004/restar/:a/:b
// Uso: node restaPath.js

const http = require('http');

const PORT = 3004;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const match = req.url.match(/^\/restar\/(-?[\d.]+)\/(-?[\d.]+)$/);

  if (req.method === 'GET' && match) {
    const a = parseFloat(match[1]);
    const b = parseFloat(match[2]);
    const resultado = a - b;

    res.writeHead(200);
    res.end(JSON.stringify({ operacion: 'resta', a, b, resultado }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Usa: GET /restar/:a/:b' }));
  }

});

server.listen(PORT, () => {
  console.log(`[Resta Path] corriendo en http://localhost:${PORT}`);
  console.log(`  Prueba: http://localhost:${PORT}/restar/10/3`);
});
