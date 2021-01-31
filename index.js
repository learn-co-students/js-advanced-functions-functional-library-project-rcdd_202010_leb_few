const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(collection, callback) {
let array = (collection instanceof Array) ? collection.slice() : Object.values(collection);
  for (let i = 0; i < array.length; i++)
       callback(array[i]);
      return collection;
    },
    map: function(collection, callback) {
      let array=[];
     if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let i = 0; i < collection.length; i++)
        array.push(callback(collection[i]))
      return array;
    },
    reduce: function(collection, callback, acc) {
       let col = collection.slice(0)
    if(!acc){
      acc = col[0];
      col = col.splice(1);
    }
    for (let i = 0; i < col.length; i++)
    acc=callback(acc, col[i], col);
    return acc;
    },
   find:function(collection, predicate) {
    if (!(collection instanceof Array))
        collection = Object.values(collection)

      for(let i=0; i< collection.length; i++){
        if(predicate(collection[i]))
        return collection[i];
        }
     return undefined;
    },
    filter : function(collection, predicate) {
      let array=[];
        if (!(collection instanceof Array))
        collection = Object.values(collection)
        for(let i=0; i< collection.length; i++){
         if(predicate(collection[i])) array.push(collection[i]);

        }
    return array;
    },
    size : function(collection) {
        let c=0;
        if (!(collection instanceof Array))
        collection = Object.keys(collection)
        for(let i=0; i< collection.length; i++){
        c++;

        }
    return c;
    },
    first : function(array, n) {
       if(!n){
       return array[0];
       }else{
       return array.slice(0,n);
       }
    },
    last:function(array, n) {
       if(!n){
       return array[array.length-1];
       }else{
       return array.slice(array.length-n);
       }
    },
    compact : function(array) {
      let array1=[]
       for(let i=0; i<array.length;i++){
         if(array[i])
         array1.push(array[i]);
       }
       return array1;
    },
    sortBy: function(array, callback) {
      const arr = [...array]
      return arr.sort(function(x, y) {
        return callback(x) - callback(y)
      })
    },
    uniq: function(array, isSorted, callback) {
      if (isSorted) {
        return fi.uniqSorted(array, iteratee)
      } else if (!callback) {
        return Array.from(new Set(array))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
    keys: function(object) {
      let array = []
      for (let i in object){
        array.push(i);
      }
      return array
    },
    values: function(object) {
     let array = []
      for (let i in object){
        array.push(object[i]);
      }
      return array
    },
  functions: function(object) {
      let array=[]
    for(let i in object){
      if(typeof object[i] === "function"){
        array.push(i)
      }
    }
    return array;
    },
   flatten: function(array, shallow,arr=[]) {
      if (!Array.isArray(array)) return arr.push(array)
      if (shallow) {
        for (let i of array)
          Array.isArray(i) ? this.unpack(arr, i) : arr.push(i)
      } else {
        for (let i of array) {
          this.flatten(i, false, arr)
        }
      }
      return arr
    },
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

  }
})()

fi.libraryMethod()
