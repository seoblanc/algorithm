// [?] 주어진 값 중에 가장 [작은] [짝수] 값

(function() {
  // [0] init
  let min = Number.MAX_SAFE_INTEGER;
  // [1] input
  const numbers = [-2, 0, 1, 2, 3, 5, 7, 9];
  const N = numbers.length;
  // [2] process
  for(let i=0; i<N; i++) {
    if (min > numbers[i]) {
      min = numbers[i] % 2 === 0 && numbers[i] !== 0
        ? numbers[i]
        : min;
    }
  }
  // [3] output
  console.log(min);
})();