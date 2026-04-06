// restaBody.js  –  POST http://localhost:3006/restar  { "a": 10, "b": 3 }
// Uso: node restaBody.js

const http = require('http');

const PORT = 3006;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/restar') {
    let body = '';

    req.on('data', chunk => { body += chunk.toString(); });

    req.on('end', () => {
      try {
        const { a, b } = JSON.parse(body);
        const na = parseFloat(a);
        const nb = parseFloat(b);

        if (isNaN(na) || isNaN(nb)) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: 'Body inválido. Envía: { "a": número, "b": número }' }));
          return;
        }

        const resultado = na - nb;
        res.writeHead(200);
        res.end(JSON.stringify({ operacion: 'resta', a: na, b: nb, resultado }));

      } catch {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'JSON malformado' }));
      }
    });

  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Usa: POST /restar' }));
  }

});

server.listen(PORT, () => {
  console.log(`[Resta Body] corriendo en http://localhost:${PORT}`);
  console.log(`  Prueba: POST http://localhost:${PORT}/restar  body: {"a":10,"b":3}`);
});
