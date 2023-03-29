function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    console.log('passei')
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
  
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}


const list = [0, 11, 23, 33, 45, 61, 71, 72, 73]

const result = binary_search(list, 72); // 8
debugger;