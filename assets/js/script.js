// Arreglo con tareas iniciales

const tasks = [
  { id: 1, description: "Hacer mercado", status: false },
  { id: 2, description: "Estudiar para la prueba", status: true },
  { id: 3, description: "Sacar a pasear a Tobby", status: false },
];

// Elementos del DOM

const listTaskHmtl = document.querySelector("#taskList");

// Métodos

const agregarTarea = () => {
  const input = document.querySelector("#inputTask");

  if (input.value !== "") {
    const task = { id: Date.now(), description: input.value };
    tasks.push(task);

    actualizarTareas();
    input.value = "";
  }
};

const actualizarTareas = () => {
  let htmlElement = "";
  const totalTaskHmtl = document.querySelector("#totalTasks");
  const completedTaskHmtl = document.querySelector("#completedTasks");

  for (let task of tasks) {
    htmlElement += `<tr>
        <td>${task.id}</td>
        <td>${task.description}</td>
        <td><input type="checkbox" id="checkboxStatus" ${
          task.status ? "checked" : ""
        } onClick="actalizarEstadoTarea(${task.id})"/></td>
        <td><i class="fa-solid fa-xmark fa-lg" style="color: #ff0000;" onClick="eliminarTarea(${
          task.id
        })"></i></td>
    </tr>`;
  }

  totalTaskHmtl.innerHTML = `Total: <strong>${tasks.length}</strong>`;
  completedTaskHmtl.innerHTML = `Realizadas: <strong>${
    tasks.filter((task) => task.status).length
  }</strong>`;
  listTaskHmtl.innerHTML = htmlElement;
};

// Eliminar tarea

const eliminarTarea = (id) => {
  const position = tasks.findIndex((task) => task.id == id);
  tasks.splice(position, 1);
  actualizarTareas();
};

// Actualizar estado tarea

const actalizarEstadoTarea = (id) => {
  const position = tasks.findIndex((task) => task.id == id);
  const status = tasks[position].status;
  tasks[position].status = !status;

  // Este console log es para validar que el arreglo de tareas si se esta actualizando
  console.log(tasks);

  actualizarTareas();
};

actualizarTareas();
