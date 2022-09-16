let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 30, 40, 50, 60, 70, 80];

function binarySearch(numbers, target) {
  let left = 0;
 let end = numbers.length - 1;
  while (left <= end) {
    let mid = Math.floor(left + end) / 2;
    if (numbers[mid] === target) {
      console.log('item found in position', mid);
      return mid;
    }
    if (numbers[mid] > target) {
      end = mid - 1;
    }
    if (numbers[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
}

const target = 40;
const index = binarySearch(numbers, target);
console.log( index);