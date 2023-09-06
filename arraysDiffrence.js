const numbersArray1 = [];
while(true){
    const response = prompt('Enter your number');

    if( response.toLowerCase().trim() === 'quit'){
        break;
    }

    numbersArray1.push(response);
}

const numbersArray2=[];
while(true){
    const response = prompt('Enter your number');

    if( response.toLowerCase().trim() === 'quit'){
        break;
    }

    numbersArray2.push(response);
}

console.log(numbersArray1);
console.log(numbersArray2);

function diffrencearray(arr1,arr2){
    const filteredarray1 =arr1.filter(value => !arr2.includes(value));
    const filteredarray2 =arr2.filter(value => !arr1.includes(value));
    console.log(filteredarray1);
    console.log(filteredarray2);
    return filteredarray1.concat(filteredarray2)
}
console.log(diffrencearray(numbersArray1,numbersArray2))

// function diffrencearray(arr1,arr2){
//     const mainarr = arr1.concat(arr2);
//     console.log(mainarr);
//     const result = mainarr.filter((value, index) =>{return mainarr.indexOf(value) !== index} );
//     const finalarray = mainarr.delete(result)
//     return finalarray

// }
// console.log(diffrencearray(numbersArray1,numbersArray2))

// function diffrencearray(arr1,arr2){
//     const compare = arr1.concat(arr2);
//     const result=[];
//     for(let i =0;i < compare.length;i++){
//         for(let j=i+1;j < compare.length-i-1;j++){
//             if(compare[i] !== compare[j]){
//                 const finalArray =result.push();
//                 return finalArray
//         }
        
//         }
//     }
// }
// console.log(diffrencearray(numbersArray1,numbersArray2))

// function diffrencearray(arr1,arr2){
//     const result = arr1.concat(arr2);
//     const final = result.map()
//     }

// console.log(diffrencearray(numbersArray1,numbersArray2))



// array.every((currentValue, index, arr)=> { ... })
// const compareArrays = (a, b) => {
//     if (a.length !== b.length) return false;
//     else {
//       // Comparing each element of your array
//       for (var i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//           return false;
//         }
//       }
//       return true;
//     }
//   };
  
