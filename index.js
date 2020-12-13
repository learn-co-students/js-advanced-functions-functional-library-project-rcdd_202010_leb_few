const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     
     let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i]);

      return collection;
      
    },

    map: function(collection, iteratee) {
    if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        newArr.push(iteratee(collection[idx]))

      return newArr
    },

    reduce: function(collection, callback, acc) {
    let collection1 = collection.slice(0)
    if(!acc){
      acc = collection1[0];
      collection1 = collection1.splice(1);
    }
    
    for (let idx = 0; idx < collection1.length; idx++)
    acc=callback(acc, collection1[idx], collection1);
  
    return acc;
    },
    find : function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
        
      for(let i=0; i< collection.length; i++){
        if(predicate(collection[i])) return collection[i];
         
        }
     return undefined;
    },
    
    filter : function(collection, predicate) {
        if (!(collection instanceof Array))
        collection = Object.values(collection)
        
        let arr=[];
        for(let i=0; i< collection.length; i++){
         if(predicate(collection[i])) arr.push(collection[i]);
         
        }
    return arr;
    },
    
    size : function(collection) {
        if (!(collection instanceof Array))
        collection = Object.keys(collection)
        
        let c=0;
        for(let i=0; i< collection.length; i++){
        c++;
         
        }
    return c;
    },
    
    first : function(collection, n) {
       if(!n)
       return collection[0];
       if(n){
       return collection.slice(0, n);
       }
       
    },
    
    last : function(collection, n) {
       if(!n)
       return collection[collection.length-1];
       if(n){
       return collection.slice(collection.length-n);
       }
       
    },
    compact : function(collection) {
      let arr=[]
       for(let i=0; i<collection.length;i++){
         if(collection[i])
         arr.push(collection[i]);
       }
       return arr;
    },
    
    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
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
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },
    
      uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
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
     keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key);
      }
      return keys
    },
    
    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key]);
      }
      return values
    },
    
    functions: function(object) {
      let fct=[]
    for(let key in object){
      if(typeof object[key] === "function"){
        fct.push(key)
      }
    }
    
    return fct;
    },


  }
})()

fi.libraryMethod()
