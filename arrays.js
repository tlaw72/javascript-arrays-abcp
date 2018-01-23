var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
   array[element, ...array];
   return array;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
   array.unshift(element);
   return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
   array.shift();
   return array;
}

function RemoveElementFromBeginningOfArray (array) {
  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function RemoveElementFromEndOfArray (array) {
  array.slice(0, array.length - 1);
  return array;
}

