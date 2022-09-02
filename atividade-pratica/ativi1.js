const form = document.querySelector(".formulario");
form.addEventListener("submit", Play);

function Play(e) {
  e.preventDefault();
  let number = document.querySelector(".number").value;
  let randomNumber = Math.floor(Math.random() * 101);
  if (number !== randomNumber && number > randomNumber) {
    Resposta("Você errou!", false, "O valor correto é menor!");
    console.log(number, randomNumber);
  } else if (number !== randomNumber && number < randomNumber) {
    Resposta("Você errou!", false, "O valor correto é maior!");
    console.log(number, randomNumber);
  } else {
    Resposta("Você Acertou!", true, "Parabéns");
    console.log(number, randomNumber);
  }
}

function Resposta(msg, valido, value) {
  const answer = document.querySelector(".answer");
  const message = document.querySelector(".message");
  answer.style.display = "block";
  answer.innerHTML = " ";

  if (valido) {
    answer.classList.add("good");
    message.innerHTML = value;
  } else {
    answer.classList.add("bad");
    message.innerHTML = value;
  }

  answer.innerHTML = msg;
}

function NewGame() {
  const answer = document.querySelector(".answer");
  answer.style.display = "none";
  const message = document.querySelector(".message");
  message.innerHTML = "Let's play?";
}
