var nameVar = "Leticia";
nam\ = "Jose"
var nameVar = "Julian"
console.log('nameVar',nameVar);

let nameLet = "Jen";
nameLet = "Kulia";
//Let nameLet = 'Juan';
console.log('nameLet',nameLet);

const nameConst = "Frank";
//const nameConst = "Paco";
console.log('nameConst');

function getPetName(){
  var PetName = "Bonny"
}

const Name =getPetName();
console.log(PetName);

//Block scoping
var fullName = "Leticia Espinoza";

if(fullName){
  var firstName = fullName.split(' ')[0];
  console.log(firstName)
}
console.log(firstName);
