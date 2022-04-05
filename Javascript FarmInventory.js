// This function sets the padding length and padding type and adds that to the number of animals

function zeroPad (paddingLength ,X , item){
  let result = ""
  for (let i = item.length ; i<= paddingLength ; i++){
    if (result.length < paddingLength) {
      result = String(X.repeat(paddingLength - item.length)) + item
      }
    return result
    }
  
  return result
  }

//This function displays a sentence with the number of animals and the animal name

function farmInventory(animal, amount , padding){
  console.log(`The Farm has ${zeroPad(padding, "0" , amount)} ${animal} s in the inventory`)
  }
 
 // Here is an example use 
 
farmInventory("cows","5",4) 
