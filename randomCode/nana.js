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
updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
