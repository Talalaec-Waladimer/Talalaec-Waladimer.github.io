document.getElementById("name").style.textDecoration = "line-through";

function changeSurname() {
  var surnameText = document.getElementById("newSurname").value;
  document.getElementById("surname").innerHTML = "Фамилия: " + surnameText;
}

function changeBackground() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}