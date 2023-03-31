function getArrayParams(...arr) {
  let min = arr [0];
  let max = arr [0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] >= max) {
      max = arr[i];
    
    } else if (arr[i] <= min) {
      min = arr[i];

    }
      sum += arr[i];
    
  }
    let avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

for (let i = 0; i < arr.length; i++) {
  
  if (arr.length === 0) {
  return 0; 
    
  }
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0; 
    }
    
    let maxElement = Math.max(...arr);
    let minElement = Math.min(...arr);
    
    return maxElement - minElement;
  }

  function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
  
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i]% 2 === 0 ) {
        sumEvenElement += arr[i];
      } 
      
      else {
        sumOddElement += arr[i];
      }    
    }
    return sumEvenElement - sumOddElement;
  }

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
        return 0;
    }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i]% 2 === 0 ) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }    
  }
  return sumEvenElement/countEvenElement;
  
}

function makeWork(arr, func) {
  func();

  let maxWorkerResult = -Infinity;
   
  for (let i = 0; i < arr.length; i++) {
    const result = func(...arr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
