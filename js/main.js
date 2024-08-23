'use strict';
/*const tasks = [
  { name: 'Recoger setas en el campo', completed: true, id: 1 },
  { name: 'Comprar pilas', completed: true, id: 2 },
  { name: 'Poner una lavadora de blancos', completed: true, id: 3 },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
    id: 4,
  },
];
*/
const listUl = document.querySelector('.js-list');
const GITHUB_USER = "rocio-ld";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
let tasks =[];


/*
    escuchar eventos del usuario--> datos de entrada
    modificar mis datos 
    datos de salida--> mostrar al usuario cambios
*/

const handleCheckbox = (ev) => {
  const taskClicked = parseInt(ev.target.id);
  const positionTask = tasks.findIndex((task) => task.id === taskClicked);
  tasks[positionTask].completed = !tasks[positionTask].completed;
  renderTasks(tasks);
};
//escuchar eventos sobre los checkbox
function listenCheckbox() {
  const inputsCheckbox = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < inputsCheckbox.length; i++) {
    //cada input --> inputsCheckbox[i]
    inputsCheckbox[i].addEventListener('click', handleCheckbox);
  }
}
// pintar  lista de tareas
const renderTasks = (array) => {
  listUl.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    //cada tarea --> task[i] ->  { name: 'x', completed: x, id: x },
    listUl.innerHTML += `
     <li class= "${array[i].completed ? 'tachado' : null}">
        <input type="checkbox"  ${
          array[i].completed ? 'checked' : null
        } class="js-checkbox" id="${array[i].id}"/>
        ${array[i].name}
    </li>
    `;
  }

  listenCheckbox();
};
renderTasks(tasks);

const btnSearch = document.querySelector('.js-btn-filter');
const inputSearch = document.querySelector('.js-text-task-filter');

const handleSearch = (event) => {
  event.preventDefault();
  const valueInput = inputSearch.value;
  const filterTasks = tasks.filter((task) => task.name.includes(valueInput));
  renderTasks(filterTasks);
};
btnSearch.addEventListener('click', handleSearch);

//Para pintar lo que hemos obtenido del servidor tenemos que llamar a la funcion renderTasks, y como esta creada hay que poner este ejercicio debajo de la función.

fetch(SERVER_URL)
.then((response)=>response.json())
.then(data=>{
console.log(data);
tasks=data.results;
renderTasks(tasks);
});




/*4. Listado de tareas.
Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado,
A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.*/


/*const list = document.querySelector('.js-list');
const checkboxArray = document.querySelectorAll('.js-completed');

const paintTask = () => {
  for (let i = 0; i < tasks.length; i++){
    let style= "";
    if(tasks[i].completed === true){
      style="decoration";
    }
    list.innerHTML += `<li class= "${style}">
    <input id="${tasks[i].id}" type="checkbox" class= "js-completed" ${tasks[i].completed ? "checked": null}>
    ${tasks[i].name}
    </li>`
};

};
paintTask();

 

const handleClickCheckbox = () => {
  // 1- coger el id del checkbox 
  // 2- Buscar el objeto dentro del array con ese id
  // 3- Cambiar la propiedad al completed al valor contrario
  // 4- Volver a pintar la lista de tareas

}

for (let i = 0; i < checkboxArray.length; i++){
  checkboxArray[i].addEventListener('click', handleClickCheckbox)
}
*/
//const listUl = document.querySelector('.js-list');
/*
    escuchar eventos del usuario--> datos de entrada
    modificar mis datos 
    datos de salida--> mostrar al usuario cambios
*/














   








