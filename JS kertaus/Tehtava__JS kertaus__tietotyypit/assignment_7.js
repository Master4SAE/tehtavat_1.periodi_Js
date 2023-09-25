const asked_number = prompt("Enter an integer so i can generate a multiplication table up tp that number")

const converted_int = parseInt(asked_number);


const tableContainer = document.getElementById("target");
const table = document.createElement("table");

for (let i = 1; i <= converted_int; i++) {
    const row = document.createElement("tr");

      for (let j = 1; j <= converted_int; j++) {
        const multiplication = i * j;
        const cell = document.createElement("td");

        cell.textContent = `${i} * ${j} = ${multiplication}`;
        row.appendChild(cell);
      }
    table.appendChild(row);
}
document.querySelector('#targe').innerHTML = ("The mutiplication for "+ asked_number + " is")
tableContainer.appendChild(table);
