'use strict'
const asked_order = prompt("give me order to sort the list either asc or desc")

const my_list = [2,2,2,2,2,2,4,1,1,1,6,0,9];

function sortArray(numbers, order){
  if (order ==="asc"){
    const sorted_list = my_list.sort();
    return sorted_list;
  }
  else if (order ==="desc"){
    const sorted_list = my_list.sort();
    return sorted_list.reverse();

  }
  else{
    console.log("error")
  }
}
console.log(my_list);
const print_result = sortArray(my_list, asked_order);
console.log(print_result);

