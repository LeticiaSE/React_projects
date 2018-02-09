'use strict';

//JSX JS XML
var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Practica1'
  ),
  React.createElement(
    'p',
    null,
    'Nombre: Leticia'
  ),
  React.createElement(
    'p',
    null,
    'Edad: 25 '
  ),
  React.createElement(
    'p',
    null,
    'Ciudad: Tijuana'
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
