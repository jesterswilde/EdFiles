/*
We are implementing a few higher order functions from the underscore library

each: https://underscorejs.org/#each
map: https://underscorejs.org/#map
reduce: https://underscorejs.org/#reduce

the {_forEach: forEach} is a thing to improve testing. You can mostly ignore this.
Though to pass the tests instead of invoking forEach (in map and reduce) invoke _forEach
*/

//forEach should iterate over a collection and call the callback with each element, and it's index/key
const forEach = (collection, callback) => {
  for(let i = 0; i < collection.length; i++){
    callback(collection[i], i); 
  }
};

//Map should apply the callback to each element, and return the result in a new array.
//Map doesn't mutate the original collection
//Our version of map should be implemented by using foreach
const map = (collection, callback, { _forEach = forEach } = {}) => {};

//Reduce takes a collection and applies a callback to reduce the collection down to a single entry.
//The callback should get passed the current total, the current value, then the index / key
const reduce = (
  collection,
  callback,
  initialValue,
  { _forEach = forEach } = {}
) => {};

module.exports = {
  forEach,
  map,
  reduce
};
