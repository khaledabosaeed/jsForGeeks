// Create an h2 element and a button
const h2 = document.querySelector("h2");
const buttoninc = document.querySelector("#Increment");
const buttonsave = document.querySelector("#Save");
const container = document.querySelector(".container");
const buttonsdiv = document.querySelector(".buttons");

// Add 1 to head when click
buttoninc.addEventListener("click", () => {
  h2.textContent = parseInt(h2.textContent) + 1;
});

// Create a list in localStorage to display previous values and make it empty if doesn't exist
const previousValues = JSON.parse(localStorage.getItem("previousValues")) || [];
// Create a list element to display previous values from localStorage
const ul = document.createElement("ul");

// add the previous values to the list
previousValues.forEach((value) => {
  const li = document.createElement("li");
  li.textContent = value + "_";
  li.style.color = "black";
  ul.appendChild(li);
});

// Update local storage and add new value to the list
window.addEventListener("load", () => {
  container.appendChild(ul);
});

// Add a button to delete the previous local storage
const deleteButton = document.createElement("button");
deleteButton.textContent = "Clear";
buttonsdiv.appendChild(deleteButton);

// Disable  delete button if there are no previous values
if (previousValues.length === 0) {
  deleteButton.style.background = "gray";
}

// Add click event listener to the delete button
deleteButton.addEventListener("click", () => {
  localStorage.removeItem("previousValues");
  ul.innerHTML = ""; // Clear the displayed list
  deleteButton.style.background = "gray";
});

buttonsave.addEventListener("click", () => {
  const currentValue = parseInt(h2.textContent);
  previousValues.push(currentValue);
  localStorage.setItem("previousValues", JSON.stringify(previousValues));
  const li = document.createElement("li");
  li.textContent = currentValue + "_";
  li.style.color = "black";
  ul.appendChild(li);
  container.appendChild(ul);
  deleteButton.style.background = "rgb(223, 119, 119)"; // Reset
  h2.innerHTML = "0"; // Reset
});
