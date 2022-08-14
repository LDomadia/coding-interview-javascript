function tripleStep(steps) {
  // or use an array by doing "new Array(steps + 1).fill(null)"
  let memo = {};
  return tripleStepHelper(steps, memo);
}

function tripleStepHelper(step, memo) {
  if (step == 0) {
    return 1;
  }
  else if (step < 0) {
    return 0;
  }

  if (memo[step] == null) {
   memo[step] = tripleStep(step - 1, memo) + tripleStep(step - 2, memo) + tripleStep(step - 3, memo);   
  }
  
  return memo[step];
}

console.log(tripleStep(3));
console.log(tripleStep(4));
console.log(tripleStep(10));