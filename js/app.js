const entrada = document.querySelector("#entrada");
const btn = document.querySelector("#btn");
const apg = document.querySelector("#apg");
const lista = document.querySelector("#lista");
let contador = 1;
btn.onclick = () => {
  if (entrada.value != "") {
    //* Texto do alertify
    alertify.confirm(
      "Confirmação de cadastro",
      "Você tem certeza que quer incluir o item " + entrada.value,
      //* O que será executado com o botão OK
      function () {
        let itemLista = document.createElement("li");
        let texto = document.createTextNode(entrada.value);
        let iconeOk = document.createElement("ion-icon");
        let iconeRemover = document.createElement("ion-icon");
        iconeOk.classList.add("icone");
        iconeOk.setAttribute("name", "checkmark-circle-outline");
        iconeRemover.classList.add("icone2");
        itemLista.setAttribute('id',contador);
        iconeRemover.setAttribute("name", "close-circle-outline");
        iconeRemover.onclick = function (){
          apagar(itemLista)
        };
        itemLista.append(texto);
        itemLista.append(iconeOk);
        itemLista.append(iconeRemover);
        lista.append(itemLista);
        alertify.success("Item adicionado.");
        entrada.value = "";
        contador = contador + 1;
      },
      //* O que será executado com o botão Cancel
      function () {
        alertify.error("Item não inserido");
        entrada.value = "";
      }
    );
  } else {
    alertify.alert(
      "Erro ao adicionar",
      "Você precisa preencher o campo de texto."
    );
  }
};


function apagar(elemento){
  elemento.remove();
}