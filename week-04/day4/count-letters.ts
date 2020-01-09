'use strict';

/*Write a function, that takes a string as an argument and returns
 a dictionary with all letters in the string as keys, 
 and numbers as values that shows how many occurrences there are.
Create a test for that.*/

export function countAllCharacters(str:string) {
    let a = str.split("")
    let obj = {}
    a.forEach(function(s){
      let count=0
      for(var j=0;j<a.length;j++){
        if(s===a[j]){
          count+=1
          obj[a[j]]=count
        }
      }
    })
    return obj
  }
  console.log(countAllCharacters('banana'))

  