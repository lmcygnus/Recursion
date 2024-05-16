function merge(firstArray, secondArray) {
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;
  const result = [];
  let resultIndex = 0;
  while (firstArrayIndex < firstArray.length && secondArrayIndex < secondArray.length) {
    if (firstArray[firstArrayIndex] < secondArray[secondArrayIndex]) {
      result[resultIndex] = firstArray[firstArrayIndex];
      firstArrayIndex += 1;
      resultIndex += 1;
    } else {
      result[resultIndex] = secondArray[secondArrayIndex];
      secondArrayIndex += 1;
      resultIndex += 1;
    }
  }
  for (; firstArrayIndex < firstArray.length; firstArrayIndex += 1) {
    result[resultIndex] = firstArray[firstArrayIndex];
    resultIndex += 1;
  }
  for (; secondArrayIndex < secondArray.length; secondArrayIndex += 1) {
    result[resultIndex] = secondArray[secondArrayIndex];
    resultIndex += 1;
  }
  return result;
}

console.log(merge([3, 4, 5, 6], [1, 2]));

function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([105, 79, 100, 110]));
