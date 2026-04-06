// sumaQuery.js  –  http://localhost:3002/sumar?a=5&b=3
// Uso: node sumaQuery.js

const http = require('http');
const url  = require('url');

const PORT = 3002;

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

  if (req.method === 'GET' && pathname === '/sumar') {
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);

    if (isNaN(a) || isNaN(b)) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Parámetros inválidos. Usa: ?a=número&b=número' }));
      return;
    }

    const resultado = a + b;
    res.writeHead(200);
    res.end(JSON.stringify({ operacion: 'suma', a, b, resultado }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Usa: GET /sumar?a=5&b=3' }));
  }

});

server.listen(PORT, () => {
  console.log(`[Suma Query] corriendo en http://localhost:${PORT}`);
  console.log(`  Prueba: http://localhost:${PORT}/sumar?a=5&b=3`);
});
