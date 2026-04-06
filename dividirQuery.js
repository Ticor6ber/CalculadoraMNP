// dividirQuery.js  –  http://localhost:3011/dividir?a=10&b=2
// Uso: node dividirQuery.js

const http = require('http');
const url  = require('url');

const PORT = 3011;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsed   = url.parse(req.url, true);
  const pathname = parsed.pathname;
  const query    = parsed.query;

  if (req.method === 'GET' && pathname === '/dividir') {
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);

    if (isNaN(a) || isNaN(b)) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Parámetros inválidos. Usa: ?a=número&b=número' }));
      return;
    }

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
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Usa: GET /dividir?a=10&b=2' }));
  }

});

server.listen(PORT, () => {
  console.log(`[Dividir Query] corriendo en http://localhost:${PORT}`);
  console.log(`  Prueba: http://localhost:${PORT}/dividir?a=10&b=2`);
});
