const lists = document.getElementsByClassName("list");
const left = document.getElementById("left");
const right = document.getElementById("right");

// lists.forEach(list => {
//     list.addEventListerner
// });
for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;
    console.log(typeof selected);

    right.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    right.addEventListener("drop", (e) => {
      e.preventDefault();
      right.appendChild(selected);
      selected = null;
    });
    left.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    left.addEventListener("drop", (e) => {
      left.appendChild(selected);
      selected = null;
    });
  });
}
