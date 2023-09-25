// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

let myList = document.querySelector("ul");

  todoList.forEach(function (item) {
    var checkboxHTML = `<input type="checkbox" id="${item.id}" ${item.completed ? 'checked' : ''}>`;
    var labelHTML = `<label for="${item.id}">${item.task}</label>`;
    var liHTML = `<li>${checkboxHTML}${labelHTML}</li>`;

    myList.insertAdjacentHTML("beforeend", liHTML);
  });


