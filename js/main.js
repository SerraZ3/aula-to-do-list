var listas = [
  {
    titulo: "A fazer",
    todos: [
      {
        titulo: "Arrumar a casa",
        status: 0,
        descricao: "Começar limpando a cozinha",
      },
    ],
  },
];

var statusTodo = ["A fazer", "Fazendo", "Feito"];

// console.log(listas);
// var novoArray = listas.map((value, index) => {
//   console.log("lista", value);
//   console.log("titulo", value.titulo);
//   value.todos.map((val, idx) => {
//     console.log("todo", val);
//   });
//   return `Sou o index: ${index}`;
// });
// console.log(novoArray);
/**
 * Função que renderiza as listas
 */
function render() {
  let container = document.getElementsByClassName("to-do-container")[0];
  let novoConteudo = listas.map((lista, idxLista) => {
    let template =
      `<div class="col-sm-12 col-md-6 col-lg-4 mx-2 shadow-sm d-block to-do-list" data-key="${idxLista}">` +
      ' <div class="row mx-2">' +
      '   <div class="col-12 to-do-list-header">' +
      '     <div class="to-do-list-title text-center">' +
      `       <h4>${lista.titulo}</h4>` +
      "     </div>" +
      '     <div class="to-do-list-config to-do-icons">' +
      `       <div class="to-do-icon-btn remove-list" data-key="${idxLista}">` +
      '         <i class="fas fa-minus align-middle"></i>' +
      "       </div>" +
      '       <div class="to-do-icon-btn add-to-do">' +
      '         <i class="fas fa-plus align-middle"></i>' +
      "       </div>" +
      '       <div class="to-do-icon-btn config-list">' +
      '         <i class="fas fa-cog align-middle"></i>' +
      "       </div>" +
      "     </div>" +
      "   </div>" +
      ' <div class="col-12 to-do-list-body">';
    let todoHTML = lista.todos.map((todo, idxTodo) => {
      let todoAux = statusTodo[todo.status];
      return (
        '<div class="row to-do aligin-items-center shadow-sm">' +
        '<div class="col-6">' +
        '<div class="status-container">' +
        '<p class="to-do-text">Status:' +
        `<span class="status">${todoAux}</span>` +
        "</p>" +
        "</div>" +
        "</div>" +
        '<div class="col-6 to-do-icons">' +
        '<div class="to-do-icon-btn config-to-do">' +
        '<i class="fas fa-cog aligin-middle"></i>' +
        "</div>" +
        '<div class="to-do-icon-btn remove-to-do">' +
        '<i class="fas fa-minus aligin-middle"></i>' +
        "</div>" +
        "</div>" +
        '<div class="col-12">' +
        `<p class="to-do-text">${todo.titulo}</p>` +
        "</div>" +
        "</div>"
      );
    });
    template += todoHTML.join("");
    template += "</div>" + "</div>" + "</div>";
    return template;
  });
  container.innerHTML = novoConteudo.join("");
}

function addTodoList() {
  let titleInput = document.getElementById("title-list-name");

  listas.push({
    titulo: titleInput.value,
    todos: [],
  });
  titleInput.value = "";
  resetContainer();
}

function removeTodoList() {
  delete listas[this.dataset.key];

  resetContainer();
}
function addEvents() {
  let removeLists = document.getElementsByClassName("remove-list");

  for (var i = 0; i < removeLists.length; i++) {
    removeLists[i].addEventListener("click", removeTodoList);
  }
}
function resetContainer() {
  render();
  addEvents();
}

document
  .getElementById("add-to-do-list")
  .addEventListener("click", addTodoList);

resetContainer();
