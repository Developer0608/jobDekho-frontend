const missingValue =(arr) => {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + arr[0]) {
      return i + arr[0];
    }
  } 
}

const array = [2, 3, 5, 6, 7, 8, 9];
const missingElement = missingValue(array);
console.log(missingElement);
