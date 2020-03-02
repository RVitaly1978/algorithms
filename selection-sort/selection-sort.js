
function findBiggest(array) {
  let index = 0;
  let biggest = array[index];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > biggest) {
      biggest = array[i];
      index = i;
    }
  }

  return index;
}

function findSmallest(array) {
  let index = 0;
  let smallest = array[index];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      index = i;
    }
  }
  
  return index;
}

function findSmallestAboveBottom(array, minIndex, maxIndex) {
  let index = maxIndex;
  let smallest = array[index];
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < smallest) {
      if (array[i] > array[minIndex]) {
        smallest = array[i];
        index = i;
      }

      if ((array[i] === array[minIndex]) && (i > minIndex)) {
        smallest = array[i];
        index = i;
      }
    }
  }

  return index;
}

function selectionSort(array) {
  let smallestIndex = findSmallest(array);
  let biggestIndex = findBiggest(array);
  
  const sortedArray = [];
  sortedArray.push(array[smallestIndex]);

  for (let i = 0; i < array.length - 1; i += 1) {
    const smallest = findSmallestAboveBottom(array, smallestIndex, biggestIndex);
    smallestIndex = smallest;
    
    sortedArray.push(array[smallestIndex]);
  }
  
  return sortedArray;
}
