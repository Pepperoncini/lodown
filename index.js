'use strict';

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/*
 * identity: Designed to return any value passed into it. 
 *
 * @param {any value} value: the value the function will return.
 * @return {any value}: The value that was passed through {value}.
 *
 * Examples:
 *   identity(5) === 5
 *   identity({a: "b"}) === {a: "b"}
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;
/*
 * typeOf: Designed to return the datatype of any value passed into it. 
 *
 * @param {any value} value: the value that will be evaluated.
 * @return {string}: The datatype of the value provided. The types are one of:
 * "string", "array", "object", "undefined", "number", "boolean", "null", "function"
 *
 * Examples:
 *  typeOf(134) -> "number"
 *  typeOf("javascript") -> "string"
 *  typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    }
    else if (value === null) {
        return 'null';
    }
    return typeof(value);
}
module.exports.typeOf = typeOf;
/*
 * first: Designed to return the value(s) from a range of array elements starting
 * at the zero index position. 
 *
 * @param {array} array: The array containing the values being returned.
 * @param {number} number: The last index position of the range of values being returned.
 * @return {array}: An array of the values from index 0 to index {number}.
 * if no {number} is provided, returns an single value from index position 0.
 *
 * Examples:
 *   first("ponies", 1) -> []
 *   first(["a", "b", "c"], "ponies") -> "a"
 *   first(["a", "b", "c"], 1) -> "a"
 *   first(["a", "b", "c"], 2) -> ["a", "b"]
 */
function first(array, number) {
    if(!Array.isArray(array) || number < 0) {
        return [];
    } else
    if(!number || typeof(number) != 'number') {
        return [array[0]];
    } else {
      return array.slice(0, number);
    }
}
module.exports.first = first;
/*
 * last: Designed to return the value(s) from a range of array elements starting at
 * the index position provided and ending at last element of the array.
 *
 * @param {array} array: The array containing the values being returned.
 * @param {number} number: The first index position of the range of values being returned.
 * @return {array}: An array of the values from index {number} to the last index position.
 * if no {number} is provided, returns an single value from the last index position.
 * 
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */
function last(array, number) {
    if(!Array.isArray(array) || number < 0) {
        return [];
    } else
    if(!number || typeof(num) != 'number') {
        return array[array.length - 1];
    } else
    if (number > array.length) {
        return array;
    } else {
      return array.slice(-number);
    }
}
module.exports.last = last;
/*
 * indexOf: Designed to return the index of an {array} that is the first occurance
 * of {value} or return -1 if the {value} is not in the {array}.
 *
 * @param {array} array: The array over which to iterate.
 * @oaram {any value} value: The data that is being compared to the values in
 * the {array}.
 * @return {number}: The index position of the first occurance of {value} or -1
 * if the {value} is not in the {array}.
 *
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }  
    return -1;
}
module.exports.indexOf = indexOf;
/*
 * contains: Designed to return a boolean value if the <array> contains <value>
 *
 * @param {array} array: The array over which to iterate.
 * @param {any value} value: The data that is being compared to the values in
 * the {array}.
 * @return: {boolean}: Returns true if {array} contains {value}, otherwise returns
 * false.
 *
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */
function contains(array, value) {
     return (array.indexOf(value) === -1) ?  false : true;
}
module.exports.contains = contains;
/*
 * unique: Designed to return an array of elements with value duplicates removed from {array}.
 * 
 * @param {array} array: The array over which to iterate.
 * @return {array} array: The array provided without duplicate values.
 *
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */
function unique(array){ 
    return array.filter((item, index) => array.indexOf(item) >= index);
}
module.exports.unique = unique;
/*
 * filter: Designed to return a new array of elements for which calling {action}
 * returned true.
 *
 * @param {array} array: The array over which to iterate.
 * @param {Function} action: The function that will return a boolean value to filter.
 * @return {array}: An array of values that caused the {action} to return true.
 *
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 */
function filter(array, action) {
    const returnArray = [];
    each(array, (ele, i, arr) => {
        if (action(ele, i, arr)) returnArray.push(arr[i]);
    }); 
    return returnArray;
}
module.exports.filter = filter;
/*
 * reject: Designed to return a new array of elements for which calling {action}
 * returned false.
 *
 * @param {array} array: The array over which to iterate.
 * @param {Function} action: The function that will return a boolean value to filter.
 * @return {array}: An array of values that caused the {action} to return false.
 *
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5] 
 */
function reject(array, action) {
    return filter(array, (ele, i, arr) => !action(ele, i, arr));
}
module.exports.reject = reject;
/*
 * partition: Designed to return an array with two sub-arrays containing values
 * for which calling {action} returned true and false, respectively.
 *
 * @param {array} array: The array over which to iterate.
 * @param {function} action: The function that will return a boolean value to filter.
 * @return {array}: an array with two sub-arrays containing values
 * for which calling {action} returned true and false, respectively.
 *
 * Examples:
 *   _.partition([1,2,3,4,5], function(element,index,arr){
 *     return element % 2 === 0;
 *   }); -> [[2,4],[1,3,5]]
 */
function partition(array, action)  {
    const retArr = [];
    retArr.push(filter(array, action));
    retArr.push(reject(array, action));
    return retArr;
}
module.exports.partition = partition;
/*
 * map: Designed to call a function on each element in a collection and return
 * a new modified collection.
 *
 * @param {array or object} collection: The collection over which to iterate.
 * @param {function} action: The function that will modify the collection values.
 * @return {array or object}: The modified collection.
 *
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */
function map(collection, action) {
    const retArr = [];
    each(collection, (ele, key, collection) => {
        retArr.push(action(ele, key, collection));
    });
    return retArr;
}
module.exports.map = map;
/*
 * pluck: Designed to return an array containing the value of {property} for every
 * element in {array}.
 *
 * @param {array of objects} array: An array containing objects over which to iterate.
 * @param {key} property: The property to return the value of.
 * @return {array}: An array containing the values of each {property} of every
 * object.
 *
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
function pluck(array, property) {
   return map(array, obj => obj[property]);
}
module.exports.pluck = pluck;
/*
 * every: Designed to return a boolean value that depends on the {action} returning
 * true for every value in the {collection}.
 *
 * @param {object or array} collection: The collection over which to iterate.
 * @param {function} action: A function that returns a boolean value.
 * @return {boolean}: If every function call results in 'true' returning, will return true,
 * otherwise returns false. 
 *
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */
function every(collection, action) {
    if (action === undefined) {
        let bool = true;
        each(collection, (ele, key, collection) => {
            if (!collection[key]) {
                bool = false;
            }
        });
        return bool;
    }
    let bool = true;
    each(collection, (ele, key, col) => {
        if (!action(ele, key, col)) {
            bool = false;
        }
    });
    return bool;
}
module.exports.every = every;
/*
 * some: Designed to return a boolean value that depends on the {action} returning
 * true for at least one value in the {collection}.
 *
 * @param {object or array} collection: The collection over which to iterate.
 * @param {function} action: A function that returns a boolean value.
 * @return {boolean}: If at least one function call results in 'true' returning, will return true,
 * otherwise returns false. 
 *
 * Examples:
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */
function some(collection, action) {
    if (action === undefined) {
        let bool = false;
        each(collection, (ele, key, collection) => {
            if (collection[key]) {
                bool = true;
           }
        });
        return bool;
    }
    let bool = false;
    each(collection, (ele, key, col) => {
        if (action(ele, key, col)) {
            bool = true;
        }
    });
    return bool;
}
module.exports.some = some;
/*
 * reduce: Designed to call a {action} on every element in an {array} and keep
 * value of the previous {action} call. Returns the return value of the final 
 * {action} call. 
 *
 * @param {array} array: The collection over which to iterate.
 * @param {function} action: A function that returns a value that will be used for the next
 * function call. 
 * @param {any value} seed: A value that is the "previous result" used for the first {action}
 * call. If not provided, the seed will be the first element in the array.
 * @return {any value}: The return value of the final call of the {action}
 *
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */
function reduce(array, action, seed) {
    let result;
    if (seed === undefined) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            result = action(result, array[i], i);
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = action(result, array[i], i);
        }
    }  
    return result;
}
module.exports.reduce = reduce;
/*
 * extend: Designed to update the properties of {objectOne} to values of the additonal
 * objects passed into the function. Can take more than two objects. 
 *
 * @param {object} objectOne: The object that is to be updated.
 * @param {object} objectTwo: The object that {objectOne} will update from. Can take multiple objects.
 * @return {object}: The updated {objectOne}.
 *
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */
function extend(objectOne, objectTwo) {
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            objectOne[key] = arguments[i][key];
        }
    }
    return objectOne;
}
module.exports.extend = extend;