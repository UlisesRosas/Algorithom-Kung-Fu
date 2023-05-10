// Given an array of integers, find the sum of its elements.
// For example, if the array , , so return .
function simpleArraySum(ar) {
    // Write your code here
        let sum = 0
    for (let i = 0; i < ar.length; i++){
        sum += ar[i]
        // if(i < ar.length){
        //     arrNum += ar[i + 1]
        //     console.log(ar[i + 1])
        // }
       
        console.log(sum)
        
    }
    return sum;
  
}

