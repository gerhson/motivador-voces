const frases = [
  {
    frase: "Confía en tu poder.",
    amor: "Ama sin miedo.",
    energia: "Hoy todo es posible.",
    accion: "Da ese primer paso.",
    consejo: "Tu actitud define tu altura.",
    suerte: 7
  },
  {
    frase: "Respira y avanza.",
    amor: "Eres amado más de lo que crees.",
    energia: "Hoy será un gran día.",
    accion: "Toma la llamada que pospusiste.",
    consejo: "Escucha más de lo que hablas.",
    suerte: 11
  },
  // Puedes agregar más objetos aquí
];

const hoy = new Date().getDate() % frases.length;
const frase = frases[hoy];

const mensaje = `
🧠 ${frase.frase}
💘 ${frase.amor}
⚡ ${frase.energia}
🔥 ${frase.accion}
💎 Consejo de Oro: ${frase.consejo}
🎲 Número de la Suerte: ${frase.suerte}
`;

document.getElementById("mensaje").innerText = mensaje;

function leerMensaje() {
  const speech = new SpeechSynthesisUtterance(mensaje);
  speech.lang = "es-PE";
  speech.pitch = 1;
  speech.rate = 1;
  speech.volume = 1;
  speechSynthesis.speak(speech);
}
