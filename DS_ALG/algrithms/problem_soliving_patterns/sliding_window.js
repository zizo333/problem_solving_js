function maxSubArraySum1(arr, n) {
    if (arr.length < n) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
      let temp = 0;
      for (let j = 0; j < n; j++) {
        temp += arr[j + i];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  function maxSubArraySum2(arr, n) {
    if (arr.length < n) return null;
    let temp = 0;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
      maxSum += arr[i];
    }
    temp = maxSum;
  
    for (let i = n; i < arr.length; i++) {
      temp = temp + arr[i] - arr[i - n];
      maxSum = Math.max(temp, maxSum);
    }
  
    return maxSum;
  }
  
  console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 9));
  