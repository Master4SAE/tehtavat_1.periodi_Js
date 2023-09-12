'use strict'

const my_list = [2,2,2,2,2,2,4,1,1,1,6,0,9];

function sortArray(accepts){
  const sorted_list = my_list.sort();
  return sorted_list;
}
console.log(my_list);
const print_result = sortArray(my_list);
console.log(print_result);

