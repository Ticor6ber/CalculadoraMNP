// multiplicarPath.js  –  http://localhost:3007/multiplicar/:a/:b
// Uso: node multiplicarPath.js

const http = require('http');

const PORT = 3007;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const match = req.url.match(/^\/multiplicar\/(-?[\d.]+)\/(-?[\d.]+)$/);

  if (req.method === 'GET' && match) {
    const a = parseFloat(match[1]);
    const b = parseFloat(match[2]);
    const resultado = a * b;

    res.writeHead(200);
    res.end(JSON.stringify({ operacion: 'multiplicacion', a, b, resultado }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Usa: GET /multiplicar/:a/:b' }));
  }

});

server.listen(PORT, () => {
  console.log(`[Multiplicar Path] corriendo en http://localhost:${PORT}`);
  console.log(`  Prueba: http://localhost:${PORT}/multiplicar/4/5`);
});
