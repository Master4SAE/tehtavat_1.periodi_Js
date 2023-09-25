'use strict';
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
const ul = document.querySelector("ul");

function dolist() {
  ul.innerHTML = '';

todoList.forEach(item => {

    const li = document.createElement("li")
    const input = document.createElement("input");
    const lable = document.createElement("label");
    const button = document.createElement("button");

    input.setAttribute("id", item.id);
    input.setAttribute("type", "checkbox");
    button.setAttribute("id", item.id);

    if (item.completed){
      input.setAttribute("checked", item.completed )
    }

    lable.htmlFor = item.id;
    lable.textContent = item.task;
    button.textContent = "del";


    li.appendChild(input);
    li.appendChild(lable);
    li.appendChild(button);
    ul.appendChild(li)

     // Add a change event listener for each checkbox
     input.addEventListener('change', function(evt) {
      if (item.completed === true){
        item.completed = false;
      } else if (item.completed === false){
        item.completed = true;
      };
      console.log("Checkbox changed for item with ID: " + item.id + " changed boolean value to: " + item.completed);
     });

     button.addEventListener('click', function(evt) {
      ul.removeChild(li);

      console.log("item deleted with  with ID: " + item.id);
     });
});

};

dolist();

const addBtn = document.querySelector('#add');
const dialog = document.querySelector("dialog");
const form = document.querySelector('form');

  addBtn.addEventListener('click', function() {
    dialog.showModal();
   });


   form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const newItemName = document.querySelector("dialog input").value;

    const newItem = {
      id: todoList.length + 1,
      task: newItemName,
      completed: false,
    };

    todoList.push(newItem)
    dolist();

    dialog.close();


  });





