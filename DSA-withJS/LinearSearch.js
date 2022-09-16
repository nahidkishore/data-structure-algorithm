
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value)
      return i;
    
  }
  return -1;
}

const friends = [12, 45, 67, 89, 121, 345, 678, 932]

console.log(linearSearch(friends, 67)) // 2
console.log(linearSearch(friends,345)) // 5