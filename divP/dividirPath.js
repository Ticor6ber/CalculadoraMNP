// dividirPath.js  –  http://localhost:3010/dividir/:a/:b
// Uso: node dividirPath.js

const http = require('http');

const PORT = 3010;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const match = req.url.match(/^\/dividir\/(-?[\d.]+)\/(-?[\d.]+)$/);

  if (req.method === 'GET' && match) {
    const a = parseFloat(match[1]);
    const b = parseFloat(match[2]);

    if (b === 0) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'División por cero no permitida' }));
      return;
    }

    const resultado = a / b;
    res.writeHead(200);
    res.end(JSON.stringify({ operacion: 'division', a, b, resultado }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Usa: GET /dividir/:a/:b' }));
  }

});

server.listen(PORT, () => {
  console.log(`[Dividir Path] corriendo en http://localhost:${PORT}`);
  console.log(`  Prueba: http://localhost:${PORT}/dividir/10/2`);
});
