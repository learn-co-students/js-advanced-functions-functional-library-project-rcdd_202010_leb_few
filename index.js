const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

   each: function(collection, callback) {
  const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)
      
for(let i=0; i<newCollection.length; i++)
callback(newCollection[i]);
return collection;

      
    },

    map: function(collection, callback) {
  const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)
      
for(let i=0; i<newCollection.length; i++)
newCollection[i]=callback(newCollection[i]);

return newCollection;


    },

    reduce: function(collection, callback, acc) {
const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)
      if(acc){
for(let i=0; i<newCollection.length; i++)
acc=callback(acc, newCollection[i]);}

else {acc=newCollection[0];
for(let i=1; i<newCollection.length; i++)
acc=callback(acc, newCollection[i]);}

return acc;

    },

    find: function(collection, predicate) {
const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)
for(let i=0; i<newCollection.length; i++)
if(predicate(newCollection[i]))
return newCollection[i];

return undefined;
    },
 filter: function(collection, predicate) {
const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)
let array=[];
for(let i=0; i<newCollection.length; i++)
if(predicate(newCollection[i]))
 array.push(newCollection[i]);

return array;
    },
    size: function(collection){
      const newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)
      return newCollection.length;
    },
    first: function (array, n){
      if(n){
        let newArray=[];
      for(let i=0; i<n; i++)
      newArray.push(array[i]);
      return newArray;}
      return array[0];
      
      
    },
last: function (array, n){
      if(n){
        let newArray=[];
      for(let i=array.length-n; i<array.length; i++)
      newArray.push(array[i]);
      return newArray;}
      return array[(array.length)-1];
      
      
    },
    compact: function(array){
      let copy=[];
      for(let i=0; i<array.length; i++)
      {if(!!array[i])
      copy.push(array[i]);}
      return copy;
      
    },
    sortBy: function(array, callBack)
{
  let copy=array.slice();
  return copy.sort(function(a,b)
  { return callBack(a)-callBack(b); });
  
  
},
 uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },
     unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    
},
keys: function(object){
  let keys=[];
  for(let key in object)
  keys.push(key);
  
  return keys;
  
},
values: function(object){
  let values=[];
  for(let key in object)
  values.push(object[key])
  
  return values;
},
functions:function(object){
  let functions=[];
  for(let key in object)
  if(typeof object[key]==="function")
  functions.push(key);
  return functions;
  
}
}
})()
fi.libraryMethod()
