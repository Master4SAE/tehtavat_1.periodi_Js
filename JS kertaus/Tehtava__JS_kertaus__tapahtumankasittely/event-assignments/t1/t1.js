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

function dolist(){
  ul.innerHTML = '';

todoList.forEach(item => {

    var li = document.createElement("li")
    var input = document.createElement("input");
    var lable = document.createElement("label");
    var button = document.createElement("button");

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


const dialog = document.querySelector("dialog");
const btn = document.querySelector('.add-btn');

  btn.addEventListener('click', function() {
    dialog.showModal();
   });

   const btn2 = document.querySelector('.save-btn');
   btn2.addEventListener('click', function() {
    var newItemName = document.getElementById("toDoItem").value;

    const newItem = {
      id: todoList.length + 1,
      task: newItemName,
      completed: false,
    };
    todoList.push(newItem)

    dialog.close();

    dolist();

  });





