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



const list = document.querySelector('.js-list');


for (let i = 0; i < tasks.length; i++){
    let style= "";
    if(tasks[i].completed=== true){
      style="decoration";
    }
    list.innerHTML += `<li class= "${style}">
<input id="1" type="checkbox">
${tasks[i].name}
</li>`
}
 
/*4. Listado de tareas.
Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado,
A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.*/







