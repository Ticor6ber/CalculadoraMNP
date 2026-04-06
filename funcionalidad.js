// ─── Puertos por operación ───────────────────────────────────────────────────
// Ajusta estos puertos según tu configuración de microservicios
const PUERTOS = {
  suma:  { path: 3001, query: 3002, body: 3003 },
  resta: { path: 3004, query: 3005, body: 3006 },
  multi: { path: 3007, query: 3008, body: 3009 },
  div:   { path: 3010, query: 3011, body: 3012 },
};

// ─── Helper: mostrar resultado en el display ─────────────────────────────────
function mostrarResultado(valor) {
  const el = document.getElementById('resultado');
  el.style.color = 'var(--accent)';
  el.innerText = valor;
}

function mostrarError(msg) {
  const el = document.getElementById('resultado');
  el.style.color = '#ff6b6b';
  el.innerText = msg;
}

// ─── Helper: leer valores actuales de los inputs ocultos ─────────────────────
function getAB() {
  return {
    n1: document.getElementById('numA').value,
    n2: document.getElementById('numB').value,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// SUMA
// ═══════════════════════════════════════════════════════════════════════════════

function sumaPath() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.suma.path}/sumar/${n1}/${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Suma / Path'));
}

function sumaQuery() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.suma.query}/sumar?a=${n1}&b=${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Suma / Query'));
}

function sumaBody() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.suma.body}/sumar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: n1, b: n2 }),
  })
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Suma / Body'));
}

// ═══════════════════════════════════════════════════════════════════════════════
// RESTA
// ═══════════════════════════════════════════════════════════════════════════════

function restaPath() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.resta.path}/restar/${n1}/${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Resta / Path'));
}

function restaQuery() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.resta.query}/restar?a=${n1}&b=${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Resta / Query'));
}

function restaBody() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.resta.body}/restar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: n1, b: n2 }),
  })
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Resta / Body'));
}

// ═══════════════════════════════════════════════════════════════════════════════
// MULTIPLICACIÓN
// ═══════════════════════════════════════════════════════════════════════════════

function multiPath() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.multi.path}/multiplicar/${n1}/${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Multi / Path'));
}

function multiQuery() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.multi.query}/multiplicar?a=${n1}&b=${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Multi / Query'));
}

function multiBody() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.multi.body}/multiplicar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: n1, b: n2 }),
  })
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Multi / Body'));
}

// ═══════════════════════════════════════════════════════════════════════════════
// DIVISIÓN
// ═══════════════════════════════════════════════════════════════════════════════

function divPath() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.div.path}/dividir/${n1}/${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Div / Path'));
}

function divQuery() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.div.query}/dividir?a=${n1}&b=${n2}`)
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Div / Query'));
}

function divBody() {
  const { n1, n2 } = getAB();
  fetch(`http://127.0.0.1:${PUERTOS.div.body}/dividir`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: n1, b: n2 }),
  })
    .then(res => res.json())
    .then(data => mostrarResultado(data.resultado))
    .catch(() => mostrarError('Error: microservicio Div / Body'));
}