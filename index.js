
const botao = document.getElementById("btnAdd");
const ul = document.getElementById("list");

let contador = 3;

botao.addEventListener("click", () => {
        contador++; //soma +1 sempre que clicar no botao

        const li = document.createElement("li");
        li.textContent = "Item " + contador;
        ul.appendChild(li);

});

const form = document.getElementById("Formulário");
const msg = document.getElementById("mensagem")

form.addEventListener("submit", (event) => {
        event.preventDefault(); // impede o envio automático
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const idade = document.getElementById("idade").value.trim();

        if (nome == "") {
                // alert("POR FAVOR PREENCHA OS CAMPOS");
                msg.textContent = "Digite um Nome"
        } else if (email == "" ||!email.includes("@")) {
                msg.textContent = "Digite um Email valido"
        } else if (idade == "") {
                msg.textContent = "Digite a sua Idade"
        }else  {
                form.submit();

        }

});