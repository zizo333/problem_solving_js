function sumZero1(arr) {
    if (arr.length < 2) return undefined;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
      }
    }
  }
  
  function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left !== right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) return [arr[left], arr[right]];
      else if (sum > 0) right--;
      else left++;
    }
  }
  
  console.log(sumZero2([-2]));
  
  function countUniqueValues1(arr) {
    if (arr.length < 2) return arr.length;
  
    let left = 0;
    let right = 1;
    while (right < arr.length) {
      if (arr[left] !== arr[right]) {
        let temp = arr[right];
        left++;
        arr[right] = arr[left];
        arr[left] = temp;
        right++;
      } else {
        right++;
      }
    }
    return left + 1;
  }
  
  function countUniqueValues2(arr) {
    if (arr.length < 2) return arr.length;
  
    let left = 0;
    for (let right = 1; right < arr.length; right++) {
      if (arr[left] !== arr[right]) {
        left++;
        arr[left] = arr[right];
      }
    }
    return left + 1;
  }
  
  console.log(countUniqueValues2([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
  