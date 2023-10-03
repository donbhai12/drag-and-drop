let lists = document.querySelectorAll(".list");
let leftBox = document.querySelector(".left");
let rightBox = document.querySelector(".right");

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;
    rightBox.addEventListener("dragover",(e)=> {
      e.preventDefault();
    });
    rightBox.addEventListener("drop",  (e)=> {
        
      e.preventDefault();
      rightBox.appendChild(selected);
      selected = null;
      lists.innerHTML= "blue"
    });

    leftBox.addEventListener("dragover",(e)=> {
      e.preventDefault();

    });
    leftBox.addEventListener("drop", (e)=> {
      e.preventDefault();
      leftBox.appendChild(selected);
      selected = null;
      
    });
  });
}