var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array = [element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
} 

function addElementToEndOfArray(array, element) {
  array2 = [...array,element]
  return array2
}

function destructivelyAddElementToEndOfArray(array, element) {
  array[array.length] = element
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array3 - array.slice(1)
  return array3
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.shift(array.length)
  return array
}

function RemoveElementFromEndOfArray(array) {
  array.slice(array.length -1)
  return array
}

