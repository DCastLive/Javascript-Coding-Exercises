const array1 = [1,2,3,4,5,6,7,8,9,10]
function reverseArrayInPlace(arr){
  for(let i of [...arr]) {
    arr.unshift(i) 
    arr.pop()
 }
 return arr
}

console.log(reverseArrayInPlace(array1))