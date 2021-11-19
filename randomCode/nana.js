const colors = require("colors");

function updateInventory(curInv, newInv) {
  let index;
  newInv.forEach((newItem) => {
    curInv.forEach((curItem) => {
      if (newItem[1] === curItem[1]) {
        curItem[0] += newItem[0];
        index = newInv.indexOf(newItem);
        newInv.splice(index, 1);
      }
    });
  });
  newInv.forEach((item) => {
    curInv.push(item);
  });
  curInv.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });
  return curInv;
}

// Example inventory lists
// updateInventory(
//   [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"],
//   ],
//   [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"],
//   ]
// );

const getPermutations = (arr) => {
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    let temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }
    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };
  generate(arr.length, arr.slice());

  return output;
};

const noRepeatsPlease = (str) => {
  const arr = getPermutations(str.split(""));
  const regex = /(.)\1+/;
  const newArr = [];
  arr.forEach((el) => {
    if (!el.join("").match(regex)) newArr.push(el.join(""));
  });
  return newArr.length;
};

// noRepeatsPlease("aab");

const pairwise = (arr, arg) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        console.log(`\n${arr[i]} + ${arr[j]} = ${arg} \n`.green);
        let indices = i + j;
        arr[i] = undefined;
        arr[j] = undefined;
        console.log(`${i} + ${j} = ${indices}`.yellow);
        console.log("__________");
        sum += indices;
      }
    }
  }
  console.log(`Sum: ${sum}`.rainbow);
};

// pairwise([], 100);

const swap = (arr, pos1, pos2) => {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
};

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

// bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
