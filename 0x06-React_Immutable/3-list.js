import { List } from 'immutable';

// Function to convert an array to an immutable List
export function getListObject(array) {
  return List(array);
}

// Function to append an element to a List and return the updated List
export function addElementToList(list, element) {
  return list.push(element);
}
