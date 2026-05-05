# Checkpoint 10 - Menú de restaurante

He hecho un programa en JavaScript donde el usuario puede elegir un menú según la hora que escriba.

El programa empieza preguntando una hora con el formato `HH:mm`.  
Según esa hora, muestra un menú de desayuno, comida o cena.

Después va preguntando qué quiere elegir:

- plato principal
- segundo plato
- postre o bebida

Cada opción tiene su precio y al final se suma todo para mostrar una factura con el pedido completo.

También he añadido mensajes aleatorios cuando el usuario elige una opción correcta.

## Cosas que he practicado

En este ejercicio he usado:

- `prompt`
- `alert`
- variables
- condicionales `if / else`
- bucles `while`
- funciones sencillas
- objetos para guardar los menús y los precios
- `.toLowerCase()` para aceptar mayúsculas y minúsculas

## Lo que más me costó

Lo que más me costó fue la parte de validar las respuestas.

Al principio, si el usuario escribía algo mal, el programa no sabía qué hacer.  
Por eso usé un `while`, para que vuelva a preguntar hasta que la opción sea correcta.

También tuve que usar `.toLowerCase()` porque si el usuario escribía `PASTA`, `Pasta` o `pasta`, quería que el programa lo aceptara igual.

## Pruebas que hice

Probé escribiendo opciones correctas y también opciones inventadas, como `hola`, para comprobar que el programa no se rompía y volvía a preguntar.

También probé distintas horas para ver si salía desayuno, comida o cena.

## Nota

He intentado hacerlo de forma sencilla, usando cosas que entiendo, antes de complicarlo más.
