import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

// Function to merge two objects into an Immutable List
// Values from page2 will override values from page1 if they are the same
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return List(map2.merge(map1).values());
}
