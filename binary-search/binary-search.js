function binarySearch (sortedArray, item) {
  let start = 0;
  let end = sortedArray.length - 1;
  
  while (start <= end) {
    const center = Math.floor(start / 2 + end / 2);

    if (sortedArray[center] === item) {
      return center;
    }

    if (sortedArray[center] < item) {
      start = center + 1;
    } else {
      end = center - 1;
    }
  }

  return null;
}