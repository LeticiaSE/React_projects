'use strict';

//JSX JS XML
/*var template = (
<div>
  <h1>Hola</h1>
  <p>Leticia</p>
  <p>Espinoza</p>
  <p>test</p>
</div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
*/

//JSX JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Nuevo'
  ),
  React.createElement(
    'h1',
    null,
    'Le agregue h1'
  ),
  React.createElement(
    'p',
    null,
    'Otra cosa!'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Uno'
    ),
    React.createElement(
      'li',
      null,
      'Dos'
    ),
    React.createElement(
      'li',
      null,
      'Tres'
    ),
    React.createElement(
      'li',
      null,
      'Cuatro'
    ),
    React.createElement(
      'li',
      null,
      'Cinco'
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

/*#2Crear un objeto llamado app
    que contenga titulo y subtitulo
    // y renderizarlo en template.*/

/* 1er forma de hacerlo
var userName="Leticia";
var userAge=25;
var userlocation='Tijuana'

var templateDos = (
<div>
  <h1>{userName}</h1>
  <p>Edad:{userAge}</p>
  <p>Ciudad:{userlocation}</p>
</div>
);*/
//tratandolo como objeto


/*var user={
    Name:'Leticia',
    Age:25,
    location:'Tijuana'
};


var templateDos = (
<div>
  <h1>{user.Name}</h1>
  <p>Edad:{user.Age}</p>
  <p>Ciudad:{user.location}</p>
</div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateDos, appRoot);
*/

/*#Modificar el objeto app y agregar
  opcion1,opcion3,opcion1,opcion5
  posteriormente renderizarlo en template*/

var Opciones = {
  titulo: 'Practica3',
  subtitulo: 'Si me salio',
  parrafo: 'Por fin voy al corriente y termine mis Practicas, solo me falta enviarlas.'
};
var templateOpciones = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    Opciones.titulo
  ),
  React.createElement(
    'h1',
    null,
    Opciones.subtitulo
  ),
  React.createElement(
    'p',
    null,
    Opciones.parrafo
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Practica1:Listo(sin enviarla)'
    ),
    React.createElement(
      'li',
      null,
      'Practica2:Listo(sin enviarla)'
    ),
    React.createElement(
      'li',
      null,
      'Practica3:Listo(sin enviarla)'
    ),
    React.createElement(
      'li',
      null,
      'Curso de Java: En progreso'
    ),
    React.createElement(
      'li',
      null,
      'ayyy y las tareas...!!!'
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateOpciones, appRoot);

/*# Cambiar var por let o const
 */

var userName = "Leticia";
var userAge = 25;
var userlocation = 'Tijuana';

var templateDos = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName
  ),
  React.createElement(
    'p',
    null,
    'Edad:',
    userAge
  ),
  React.createElement(
    'p',
    null,
    'Ciudad:',
    userlocation
  )
);

//Practica#

var squareArrowTwo = function squareArrowTwo(x) {
  return 'Leticia';
};
console.log(squareArrowTwo(''));

var appRoot = document.getElementById('app');
ReactDOM.render(templateDos, appRoot);
