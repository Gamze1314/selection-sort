// 0.0075 runtime at first solution => commented.
// second solution is faster but less efficient, it does not modifies the array in-place. 0.0005.
// it hadles large data more efficiently. Optimize only when needed (YAGNI: You Aren’t Gonna Need It).

function selectionSort(arr) {
  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //current index is the minimum
//     let minIndex = i;

//     // Find the index of the minimum value in the unsorted portion
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     // Swap the current element with the minimum element
//     if (minIndex !== i) {
//       //array destructuring for swapping the elements.
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }

//   return arr;
// }


  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file

// find the minimum number in the array
// swap it with the first element onlf when min value is found.
// iterate through the rest of the array
// repeat the process (find minimum), swap it with the first element.
// last element stays at the last index.
// return sorted array.


// And a written explanation of your solution

// i can find the minimum value in the array and swap it with the first element.
// then i can repeat this process for the rest of the array
// i can use a for loop to iterate through the array
// i can use a nested for loop to find the minimum value in the array O(n2) o n squared for the time complexity.
// i can use a variable to keep track of the index of the minimum value
// i can swap the minimum value with the first element
// i can repeat this process for the rest of the array
// i can return the sorted array
