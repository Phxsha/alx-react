import { Map, fromJS } from 'immutable';

// Function to deeply merge two objects
export function mergeDeeplyElements(page1, page2) {
  const map1 = fromJS(page1);
  const map2 = fromJS(page2);
  const mergedMap = map1.mergeDeep(map2);
  return mergedMap.toList();
}
