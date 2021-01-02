const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

  each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
        for (let i=0; i<newCollection.length;i++)
        {
          callback(newCollection[i]);
        }
        return collection;
    },

    map: function(collection, callback) {
       const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
       const newAr=[];
        for (let i=0; i<newCollection.length;i++)
        {
          newAr.push(callback(newCollection[i]));
        }
        return newAr;
    },

    reduce: function(collection, callback, acc=0) {
       if (acc===0) {
				acc = collection[0]
				collection = collection.slice(1)
			}
       const newAr=[];
        for (let i=0; i<collection.length;i++)
        {
          acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    //functions: function() {

   // },

  find: function(collection, predicate) {
  const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i=0; i<newCollection.length;i++)
        {
          if(predicate(collection[i]))
          return collection[i];
        }
        return undefined;

    },
    filter: function(collection, predicate) {
        const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
        let newAr=[];
      for (let i=0; i<newCollection.length;i++)
        {
          if(predicate(collection[i]))
          newAr.push(collection[i]);
        }
        return newAr;
    },
    size:function(collection){
        const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
        return newCollection.length;
    },
    first : function(collection, stop=false){
      if(stop) return collection.slice(0, stop);
      else return collection[0]
    }, 
    last : function(collection, stop=false){
      if(stop) return collection.slice(collection.length-stop, collection.length);
      else return collection[collection.length-1]
    },
    compact:function(collection){
      let newAr=[];
      for (let i=0; i<collection.length;i++){
        if (collection[i]) newAr.push(collection[i])
      }
      return newAr
    },
     sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },
    keys : function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },
     values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },
      functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

    flatten: function(arr, shallow){
      let newArr=[];
      if(shallow){
        for (const element of arr) {
          if(!Array.isArray(element)){
            newArr.push(element);
          }
          else  {
            for (const el of element){
            newArr.push(el);}
           }
          }
      }
      else {
          for (const element of arr) {
            if (!Array.isArray(element)) {
              newArr.push(element);
            }
          else {
             let flat= fi.flatten(element);
             for(const fl of flat){
               newArr.push(fl);
             }
        }
    }
  }
  return newArr
},
    uniq:function(arr, sorted, iteratee=false){
      let newArr=[];
      newArr.push(arr[0]);
      if(!iteratee){
        for (const element of arr){
          if(!newArr.find(el => el== element)){
            newArr.push(element);
          }
         }
        }
         else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of arr) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
        return newArr
    }
  }
})()

fi.libraryMethod()
