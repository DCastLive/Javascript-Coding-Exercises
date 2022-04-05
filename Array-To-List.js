function arrayToList (arr){
  for ( var i = arr.length - 1; i >=0; i--){
    var list = { value: arr[i], rest: list};
  }
  return list;
}
console.log(arrayToList([1,2,3,4,5,6,7,8,9]))
// Its not going to return the same thing in 
// every console. In the browser console it 
// returns the whole list. But in Pythontutor it
// does not.
