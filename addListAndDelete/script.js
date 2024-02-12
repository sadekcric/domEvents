const fruitList = document.getElementById("fruit_list");

fruitList.addEventListener("click", function (e) {
  e.target.remove();
});



document.getElementById("addChild").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = "new Item";
  fruitList.appendChild(newItem);
});
