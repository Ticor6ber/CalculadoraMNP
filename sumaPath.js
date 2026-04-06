// sumaPath.js  –  http://localhost:3001/sumar/:a/:b
// Uso: node sumaPath.js

const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Espera: GET /sumar/5/3
  const match = req.url.match(/^\/sumar\/(-?[\d.]+)\/(-?[\d.]+)$/);

  if (req.method === 'GET' && match) {
    const a = parseFloat(match[1]);
    const b = parseFloat(match[2]);
    const resultado = a + b;

    res.writeHead(200);
    res.end(JSON.stringify({ operacion: 'suma', a, b, resultado }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Usa: GET /sumar/:a/:b' }));
  }

});

server.listen(PORT, () => {
  console.log(`[Suma Path] corriendo en http://localhost:${PORT}`);
  console.log(`  Prueba: http://localhost:${PORT}/sumar/5/3`);
});
