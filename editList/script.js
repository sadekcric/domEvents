{
  const parentLi = document.getElementById("parent_li");
  document.getElementById("addNew").addEventListener("click", function () {
    const addNew = document.createElement("li");
    addNew.innerText = "Newly Created";
    parentLi.appendChild(addNew);
  });

  parentLi.addEventListener("dblclick", function (e) {
    const temp = e.target.innerText;
    e.target.innerHTML = "";
    const input = document.createElement("input");

    e.target.appendChild(input);
    input.value = temp;

    input.addEventListener("keypress", function (event) {
      
      if (event.key === "Enter") {
        if (event.target.value === "") {
        e.target.remove();
      }
        e.target.innerHTML = event.target.value;
      }
    });
  });
}

{
  const favoritelist = document.getElementById("favorite");
  const language = document.getElementsByName("language");
  let favoriteLanguage = [];
  [...language].forEach((lan) => {
    lan.addEventListener("change", function (e) {
      if (e.target.checked) {
        favoriteLanguage.push(e.target.value);
        outputLanguage(favoritelist, favoriteLanguage);
      } else {
        const index = favoriteLanguage.indexOf(e.target.value);
        favoriteLanguage.splice(index, 1);
        outputLanguage(favoritelist, favoriteLanguage);
      }
    });
  });

  function outputLanguage(parent, array) {
    let result = "";
    array.forEach((arr, i) => {
      result += `(${i + 1}) ${arr} `;
    });
    parent.innerHTML = result;
  }
}
