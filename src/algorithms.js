// algorithms.js

// Kadane's Algorithm to find the maximum sum of a subarray
export const kadaneAlgorithm = (arr) => {
    let current_sum = arr[0];
    let max_sum = arr[0];
    let start = 0, end = 0, temp_start = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > current_sum + arr[i]) {
        current_sum = arr[i];
        temp_start = i;
      } else {
        current_sum += arr[i];
      }
  
      if (current_sum > max_sum) {
        max_sum = current_sum;
        start = temp_start;
        end = i;
      }
    }
    return { max_sum, start, end };
  };
  
  // Function to generate an array with random values between -10 and 10
  export const generateArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 21) - 10); // Random number between -10 and 10
    }
    return arr;
  };
  