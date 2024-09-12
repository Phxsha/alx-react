// Import the Immutable.js library
const { fromJS } = require('immutable');

// Function to convert a regular object to an Immutable Map
function getImmutableObject(object) {
  return fromJS(object);
}

// Export the function
module.exports = getImmutableObject;
