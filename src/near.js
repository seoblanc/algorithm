// [?] 주어진 데이터 중에서 대상 데이터와 가장 가까운 값을 구하여라.

// 근사값 알고리즘 => 차이값의 절대값의 최소값
(function() {
  // [0] init
  let diff = Number.MAX_SAFE_INTEGER;
  // [1] input
  const numbers = [10, 20, 37, 27, 17];
  const target = -15;
  const N = numbers.length;
  let near = 0;
  // [2] process
  for (let i=0; i<N; i++) {
    const abs = Math.abs(numbers[i] - target); // 차이값의 절대값
    if (abs < diff) {
      near = numbers[i];
      diff = abs;
    }
  }
  // [3] oputput
  console.log('타겟[' + target +']과 가장 가까운 값은 : ' + near + ' (차이값 : ' + diff + ')')
})();