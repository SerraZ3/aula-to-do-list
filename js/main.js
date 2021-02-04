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
  {
    titulo: "Fazendo",
    todos: [
      {
        titulo: "Arrumar a casa 2",
        status: 1,
        descricao: "Começar limpando a cozinha",
      },
    ],
  },
  {
    titulo: "Feito",
    todos: [
      {
        titulo: "Arrumar a casa 2",
        status: 1,
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
    console.log(lista.titulo);
    let template =
      '<div class="col-sm-12 col-md-6 col-lg-4 mx-2 shadow-sm d-block to-do-list">' +
      '<div class="row mx-2">' +
      '<div class="col-12 to-do-list-header">' +
      '<div class="to-do-list-title text-center">' +
      `<h4>${lista.titulo}</h4>` +
      "</div>" +
      '<div class="to-do-list-config to-do-icons">' +
      '<div class="to-do-icon-btn remove-list">' +
      '<i class="fas fa-minus align-middle"></i>' +
      "</div>" +
      '<div class="to-do-icon-btn add-to-do">' +
      '<i class="fas fa-plus align-middle"></i>' +
      "</div>" +
      '<div class="to-do-icon-btn config-list">' +
      '<i class="fas fa-cog align-middle"></i>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="col-12 to-do-list-body">' +
      '<div class="row to-do aligin-items-center shadow-sm">' +
      '<div class="col-6">' +
      '<div class="status-container">' +
      '<p class="to-do-text">Status:' +
      '<span class="status">Fazendo</span>' +
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
      '<p class="to-do-text">Limpar a casa</p>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    return template;
  });
  container.innerHTML = novoConteudo.join("");
}
render();
