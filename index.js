var input = document.getElementById("content");
var ul = document.querySelector("ul");
var enterButton = document.getElementById("enter");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createList() {

  var list = document.createElement("li");
  list.appendChild(document.createTextNode(input.value));
  ul.appendChild(list);
  input.value = "";   
  
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("X"));
  list.appendChild(btn);

  btn.style.float = "right";
  btn.addEventListener("click",deleteItem);

  function deleteItem() {
    
    list.style.display = "none";
  }
}

function addItemsAfterClick() {
  if(inputLength() > 0) {
    createList();
  }  else {
    alert("Please Enter Your Work!");
  }
}

function addItemsAfterKeypress(event) {
  if(inputLength() > 0 && event.which === 13) {
    createList();
  }
}

input.addEventListener("keypress",addItemsAfterKeypress);

enterButton.addEventListener("click",addItemsAfterClick);