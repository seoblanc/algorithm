// [?] 주어진 데이터 중 최대값

(function() {
  // [0] init
  let max = Number.MIN_SAFE_INTEGER;
  // [1] input
  const numbers = [-2, -5, -1, -10, -3];
  let N = numbers.length;

  // [2] process
  for(let i=0; i<N; i++) {
    if(max < numbers[i]) {
      max = numbers[i];
    }
  }

  // [3] output
  console.log(max);
})();