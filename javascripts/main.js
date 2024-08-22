'use strict';
const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
  ];

/*4. Listado de tareas.
Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado,
A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.*/


const list = document.querySelector('.js-list');
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

   








