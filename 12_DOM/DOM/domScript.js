// Example 1

// there is the querySelector, querySelectA also exist that select all the ids and classes os specific
// querySelector we use with special text like ( . for class, # for id )  example ( #changeTextButton )

// document.querySelector('#changeTextButton').addEventListener('click', changeTextButton);

// let hold = document.getElementById('changeTextButton');
// console.log(hold);

// for events listener search on the mdn about the events

// addEventListener takes two parameters, 1) event 2) function

// function should be a function, its not to be arrow function
// if we use arrow function () => { } then its will not work because it will take the complete window as a context
// but we want to use the context of the element that we are using so that's why we need to use function keyword

document
  .getElementById("changeTextButton")
  .addEventListener("click", changeTextButton);

function changeTextButton() {
  let paragraph = document.getElementById("myParagraph");
  console.log(paragraph);
  paragraph.textContent = "The paragraph texts are changed!";
}

// Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", highlighFirstText);

function highlighFirstText() {
  let citiesList = document.getElementById("citiesList");
  console.log(citiesList);
  let firstCity = citiesList.firstElementChild;
  console.log(firstCity);

  let firstCityClass = firstCity.classList; // classList is a property that returns a list of classes
  console.log(firstCityClass);

  firstCityClass.add("highlight");
}

// Example 3

document.getElementById("changeOrder").addEventListener("click", changeOrder);

function changeOrder() {
  let coffeeType = document.getElementById("coffeeType");
  console.log(coffeeType);
  coffeeType.textContent = "Espresso";

  // we can add css as well on this property
  coffeeType.style.backgroundColor = "orange";
  coffeeType.style.padding = "8px";
}

// Example 4

document
  .getElementById("addNewItem")
  .addEventListener("click", createAndInsertItem);

function createAndInsertItem() {
  // in DOM every element of HTML is a node, like
  // ( button, p, li, ul etc.. ) in html its called tags/elements but in DOM its called Node

  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  let shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newItem);
}

// Example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", removeLastTask);

function removeLastTask() {
  let taskList = document.getElementById("taskList");

  taskList.lastElementChild.remove();
}

// Example 6

/// try out add listener on dblClick, click, mouseover, mouseenter and more...

document
  .getElementById("clickMeButton")
  .addEventListener("mouseenter", function () {
    alert("Button clicked!");
  });

// Example 7 Event Delegation

document.getElementById("teaList").addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target); // event.target will give the element that was clicked

  // Check if the clicked element is a list item, we use selector for this and to get the selector use "."
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You clicked on: ${event.target.textContent}`); // event.target.textContent will give the text of the clicked element
  }
});

// Example 8 Form Handling

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    /// get label text from the Form
    let labelHTML = document.querySelector(
      'label[for="feedbackInput"]'
    ).innerHTML;
    console.log(labelHTML);

    /// feedback text
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);

    ///

    let feedbackDisplay = document.getElementById("feedbackDisplay");

    feedbackDisplay.textContent = `Feedback Content is : ${feedback}`;
    feedbackDisplay.style.background = "orange";
    feedbackDisplay.style.color = "black";
    feedbackDisplay.style.padding = "20px";
    feedbackDisplay.style.fontSize = "30px";
  });

// Example 9: DOM Loading

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM Loaded Successfully!";
});

// Example 10 : CSS Classes Manipulation

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    // descriptionText.classList.add("highlight");
    descriptionText.classList.toggle("highlight");
    descriptionText.classList.toggle("padding");
    // descriptionText.style.fontSize = "30px";
    // descriptionText.style.padding = "10px";
  });
