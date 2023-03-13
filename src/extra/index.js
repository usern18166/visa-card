let array = [1, 2, 3, 4, 5, 4, 5, 67, 8, 12, 3, 5, 3, 2, 1];
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;
// console.log(array);

// [array[0],array[4]]=[array[4],array[0]]
// console.log(array)

// console.log(...new Set(array))

let letter=['Cat','car','a','B','bee','ant']

letter.sort((a,b)=>{
    let x=a.toUpperCase();
    let y=b.toLowerCase()
   return x == y ? 0: x>y ? 1:-1
})
console.log(letter)