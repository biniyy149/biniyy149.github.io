function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
    for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
    sumFixedStart += arr[j];
    maxSum = Math.max(maxSum, sumFixedStart);
    }
    }
    return maxSum;
    }
    