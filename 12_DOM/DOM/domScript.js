// Example 1

// there is the querySelector, querySelectA also exist that select all the ids and classes os specific
// querySelector we use with special text like ( . for class, # for id )  example ( #changeTextButton )

// let hold = document.getElementById('changeTextButton');
// console.log(hold);

// for events listener search on the mdn about the events

// addEventListener takes two parameters, 1) event 2) function

// function should be a function, its not to be arrow function

document
  .getElementById('changeTextButton')
  .addEventListener('click', changeTextButton);

function changeTextButton() {
  let paragraph = document.getElementById('myParagraph');
  paragraph.textContent = 'The paragraph texts are changed!';
}

// Example 2

document
  .getElementById('highlightFirstCity')
  .addEventListener('click', highlighFirstText);

function highlighFirstText() {
  let citiesList = document.getElementById('citiesList');
  console.log(citiesList);
  let firstCity = citiesList.firstElementChild;
  console.log(firstCity);

  let firstCityClass = firstCity.classList;
  console.log(firstCityClass);

  firstCityClass.add('highlight');
}

// Example 3

document.getElementById('changeOrder').addEventListener('click', changeOrder);

function changeOrder() {
  let coffeeType = document.getElementById('coffeeType');
  console.log(coffeeType);
  coffeeType.textContent = 'Espresso';

  // we can add css as well on this property
  coffeeType.style.backgroundColor = 'orange';
  coffeeType.style.padding = '8px';
}

// Example 4

document
  .getElementById('addNewItem')
  .addEventListener('click', createAndInsertItem);

function createAndInsertItem() {
  // in DOM every element of HTML is a node, like
  // ( button, p, li, ul etc.. ) in html its called tags/elements but in DOM its called Node

  let newItem = document.createElement('li');
  newItem.textContent = 'Eggs';

  let shoppingList = document.getElementById('shoppingList');
  shoppingList.appendChild(newItem);
}

// Example 5

document
  .getElementById('removeLastTask')
  .addEventListener('click', removeLastTask);

function removeLastTask() {
  let taskList = document.getElementById('taskList');

  taskList.lastElementChild.remove();
}
