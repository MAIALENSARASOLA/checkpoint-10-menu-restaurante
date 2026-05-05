// Checkpoint 10 - Menú restaurante
// He intentado hacerlo sencillo para entender bien la lógica

let mensajes = [
  "Buena elección",
  "Muy bien",
  "Tiene buena pinta",
  "Buena decisión"
];

// función para mostrar un mensaje aleatorio
function mensajeRandom() {
  let numero = Math.floor(Math.random() * mensajes.length);
  alert(mensajes[numero]);
}

// menú desayuno
let menuDesayuno = {
  principal: {
    tostadas: 3,
    tortilla: 4,
    croissant: 2.5
  },
  segundo: {
    fruta: 2,
    yogurt: 2,
    cereales: 2.5
  },
  postre: {
    cafe: 1.5,
    zumo: 2,
    te: 1.5
  }
};

// menú comida
let menuComida = {
  principal: {
    pasta: 3,
    arroz: 2,
    alubias: 4
  },
  segundo: {
    carne: 5,
    pescado: 6,
    hamburguesa: 4
  },
  postre: {
    cafe: 1,
    yogurt: 2,
    fruta: 2
  }
};

// menú cena
let menuCena = {
  principal: {
    pizza: 6,
    ensalada: 4,
    sopa: 3
  },
  segundo: {
    pollo: 5,
    pescado: 6,
    bocadillo: 4
  },
  postre: {
    helado: 2,
    flan: 2,
    tarta: 3
  }
};

// función para pedir un plato
function pedirPlato(tipo, opciones) {
  let texto = "Elige " + tipo + ":\n";

  for (let plato in opciones) {
    texto += plato + " - " + opciones[plato] + "€\n";
  }

  // paso la respuesta a minúsculas para aceptar PASTA, Pasta o pasta
  let respuesta = prompt(texto).toLowerCase();

  // mientras el plato no exista, sigo preguntando
  while (opciones[respuesta] === undefined) {
    alert("Ese plato no existe. Prueba de nuevo.");
    respuesta = prompt(texto).toLowerCase();
  }

  mensajeRandom();

  return {
    nombre: respuesta,
    precio: opciones[respuesta]
  };
}

// pedir hora
let horaTexto = prompt("Bienvenido. Introduce una hora con el formato HH:mm");

// separo la hora y los minutos
let partes = horaTexto.split(":");
let hora = parseInt(partes[0]);

let menuElegido;
let nombreMenu;

// decido qué menú corresponde según la hora
if (hora >= 6 && hora < 12) {
  menuElegido = menuDesayuno;
  nombreMenu = "desayuno";
} else if (hora >= 12 && hora < 18) {
  menuElegido = menuComida;
  nombreMenu = "comida";
} else {
  menuElegido = menuCena;
  nombreMenu = "cena";
}

alert("Te corresponde el menú de " + nombreMenu);

// pedir platos
let principal = pedirPlato("plato principal", menuElegido.principal);
let segundo = pedirPlato("segundo plato", menuElegido.segundo);
let postre = pedirPlato("postre o bebida", menuElegido.postre);

// calcular total
let total = principal.precio + segundo.precio + postre.precio;

// mostrar factura final
alert(
  "Tu pedido:\n\n" +
  "Menú: " + nombreMenu + "\n" +
  "Principal: " + principal.nombre + " - " + principal.precio + "€\n" +
  "Segundo: " + segundo.nombre + " - " + segundo.precio + "€\n" +
  "Postre/Bebida: " + postre.nombre + " - " + postre.precio + "€\n\n" +
  "Total: " + total.toFixed(2) + "€"
);