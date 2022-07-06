

//************ Manejo de Handlebars ********/

const template1 = Handlebars.compile 
    (`<div>
        <div class="bg-dark text-center text-white overflow-hidden">
        <div class="my-3 py-3">
          <h2 class="display-5 text-danger"" > Acá deberían ver {{nombre}}</h2>
          <p  class="display-5"> No se utilizar la función <span> FETCH </p>
        </div>
        <div class="bg-light shadow-sm mx-auto" ></div>
      </div>
    </div>`);
const html = template1 ({nombre:"los productos de una tabla...."});
document.getElementById("span").innerHTML = html;

const template2 = Handlebars.compile 
    (`<div>
        <div class="bg-secondary text-center text-white overflow-hidden">
        <div class="my-3 py-3">
          <h2 class="display-5 text-white"" > Pude insertar el {{nombre}} </h2>
          <p  class="display-6">Me falto insertar la fecha/hora y reenderizar la tabla de productos.</p>
        </div>
        <div class="bg-light shadow-sm mx-auto" ></div>
      </div>
    </div>`);
const html2 = template2 ({nombre:"Chat con websocket"});
document.getElementById("notas").innerHTML = html2;


// ******************  Manejo de chat con websockets*******************

const socket = io.connect();

function makeHTML(mensajes) {
  return mensajes
    .map((elem, index) => {
      return `<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`;
    })
    .join(" ");
}

function render(data) {
  const html = makeHTML(data);
  document.getElementById("mensajes").innerHTML = html;
}

socket.on("mensajes", (mensajes) => {
  render(mensajes);
});

function addMessage(e) {
  const mensaje = {
    author: document.getElementById("email").value,
    text: document.getElementById("texto").value,
  };
  socket.emit("nuevoMensaje", mensaje);
  return false;
}