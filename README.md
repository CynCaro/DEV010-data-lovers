# Rick & Morty

## ¡Bienvenidas a la aventura interdimensional de la página de personajes de Rick y Morty!

¿Eres una verdadera fanática de la serie? ¿Has soñado con explorar todos los rincones del multiverso junto a Rick y Morty? ¡Pues estás de suerte! Nuestra página ha sido creada pensando en ti, la apasionada seguidora de las locuras científicas y desventuras cósmicas.

¿Te has preguntado alguna vez cuál sería tu compañero interdimensional perfecto? ¡Ahora puedes averiguarlo! Simplemente ingresa tu nombre y haz clic en el botón misterioso. Nuestro algoritmo intergaláctico seleccionará un personaje aleatorio de la serie para acompañarte en esta emocionante travesía. ¿Será un Meeseeks? ¿Un alienígena extravagante? ¿O tal vez incluso un Morty del universo paralelo? ¡La emoción está garantizada!

Pero eso no es todo. Si deseas explorar más allá, tenemos una vasta colección de tarjetas de personajes esperando a ser descubiertas. Utiliza los filtros de especie y estado para encontrar a tus personajes favoritos o a aquellos en situaciones cósmicas un tanto inciertas. ¿Eres una seguidora de los humanos, los aliens o tal vez algo más inusual? ¡Tú decides!

¿Buscas a ese personaje escurridizo que solo apareció una vez en un capítulo? No te preocupes, nuestra barra de búsqueda te ayudará a encontrarlo en un abrir y cerrar de portales. ¡La diversión de explorar el multiverso ahora está en tus manos!

Así que, fanática intrépida, prepárate para sumergirte en un océano de datos, aventuras y personajes estrafalarios. Nuestra página te ofrece la herramienta definitiva para saciar tu curiosidad y explorar todos los recovecos de la serie. 
¡[Haz clic](aquí va la url), descubre y diviértete en el maravilloso mundo de Rick y Morty como nunca antes!


***

## 1. Proceso creativo y desarrollo.

Pra esta divertida aventura, iniciamos con un prototipo a lapiz (pluma) y papel, sobre cómo nos imaginamos que, nosotras como fans de la serie, nos gustaría buscar y encontrar la información.
![Prototipo-baja1](url de la ubicación)
![Prototipo-baja2](url de la ubicación)

Despúes, pasamos a hacerlo un poco más real.
![Protitipo1](C:\Users\BB-7\Desktop\Diseño web\Proyecto 2\DEV010-data-lovers\src\data\rickandmorty\img\Prototipo Alta1.jpg)
![Prototipo1](C:\Users\BB-7\Desktop\Diseño web\Proyecto 2\DEV010-data-lovers\src\data\rickandmorty\img\Prototipo Alta2.jpg)

Como verás, al principio buscamos que nuestra página tuviera un inicio, pero para qué retrasar la diversión si podemos llegar de una sola vez. 😉🌠

¿Pero cómo pusimos manos a la obra?
Nos organizamos usando la gran plataforma de Trello para descargar las tareas que debíamos hacer, según cada Historia de usuario.

![Trello](C:\Users\BB-7\Desktop\Diseño web\Proyecto 2\DEV010-data-lovers\src\data\rickandmorty\img\Organización.jpg)

En nuestra investigación:
La serie de Rick & Morty tiene 6 temporadas y puede llegar a ser complicada ya que hay muchísimos personajes, entre ellos hay clones, aliens, robots, etc. 
Nuestra página ayudaría al usuario (fan) a conocer un poco más sobre los personajes, y como son demasiados, hay un filtrado por nombre, o por categorías. Si solo sabe el nombre, de la misma forma puede buscarlo por nombre.
Además, si el usuario desea conocer un poco más de la serie y personajes que no conoce, esta página le da un breve juego de interacción en el que le dará un personaje cuando escriba su nombre, el resultado podría ser cualquiera.

![Historias-usuario](C:\Users\BB-7\Desktop\Diseño web\Proyecto 2\DEV010-data-lovers\src\data\rickandmorty\img\Historias de Usuario.jpg)

Probamos nuestra página con algunas personas, y nos dieron algunas sugerencias sobre la interfaz, por lo tanto hicimos algunos cuantos ajustes 🔩.

![Final-sugerencias](C:\Users\BB-7\Desktop\Diseño web\Proyecto 2\DEV010-data-lovers\src\data\rickandmorty\img\Final con sugerencias y funcionando.jpg)

Y ahora, es así como se ve la página al final:

![Página-funcionando](C:\Users\BB-7\Desktop\Diseño web\Proyecto 2\DEV010-data-lovers\src\data\rickandmorty\img\Página funcionando.jpg)

Esperamos que te ayude a entender mejor la serie y, ¡qué te diviertas!

### 2. Aspectos Técnicos

![Passed-test](C:\Users\BB-7\Desktop\Diseño web\Proyecto 2\DEV010-data-lovers\src\data\rickandmorty\img\Pass test.jpg)







- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**


### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/lol/lol.js';
```

La línea quedaría así:

```js
import data from './data/lol/lol.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`


* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `test/data.spec.js`

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
