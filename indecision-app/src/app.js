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
var template = (
<div>
  <h1>Nuevo</h1>
  <h1>Le agregue h1</h1>
  <p>Otra cosa!</p>
  <ol>
      <li>Uno</li>
      <li>Dos</li>
      <li>Tres</li>
      <li>Cuatro</li>
      <li>Cinco</li>
  </ol>
</div>
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

var Opciones={
  titulo:'Practica3',
  subtitulo:'Si me salio',
  parrafo:'Por fin voy al corriente y termine mis Practicas, solo me falta enviarlas.'
}
  var templateOpciones = (
  <div>
    <h1>{Opciones.titulo}</h1>
    <h1>{Opciones.subtitulo}</h1>
    <p>{Opciones.parrafo}</p>
    <ol>
        <li>Practica1:Listo(sin enviarla)</li>
        <li>Practica2:Listo(sin enviarla)</li>
        <li>Practica3:Listo(sin enviarla)</li>
        <li>Curso de Java: En progreso</li>
        <li>ayyy y las tareas...!!!</li>
    </ol>
  </div>
  );

  var appRoot = document.getElementById('app');
  ReactDOM.render(templateOpciones, appRoot);


  /*# Cambiar var por let o const

  */

  const userName="Leticia";
  const userAge=25;
  const userlocation='Tijuana'

  const templateDos = (
  <div>
    <h1>{userName}</h1>
    <p>Edad:{userAge}</p>
    <p>Ciudad:{userlocation}</p>
  </div>
  );

  //Practica#3 13/02/2018

//let userName
//let userAge
//let userlocation
//  const squareArrowTwo = (x) => 'Leticia';
//  console.log(squareArrowTwo(''))


//  var appRoot = document.getElementById('app');
//  ReactDOM.render(templateDos, appRoot);
const user = {
  name: 'Cristian',
  cities: ['Tijuana','Guadalajara','Ensenada'],
  printPlace(){
    const cityMessages = this.cities.map((city) => {
    return this.name + 'has been in ' + city;
    return this.cities.map((city)) => this.name +'has been in' +city);
    return cityMessages;
  }
};

console.log(user.printPlace());
//Practica
//const multiplier ={
//numbers -arreglo de numeros[1,2]
//multiplyBY =un solo numero
//multiply - regresa un nuevo arreglo multiplicado
//}
//verlo con console.log(multiplier.multiply()) //[2,4]

c
