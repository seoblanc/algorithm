// [?] 무작위 데이터를 순서대로 [오름차순|내림차순] 정렬

// 정렬 알고리즘 : 가장[작은|큰] 데이터를 왼쪽부터 순서대로 이동
(function() {
  // [1] input
  const data = [ 3, 2, 1, 5, 4];
  const N = data.length;
  // [2] process
  for (let i = 0; i < N - 1; i++) { // i 0 ~ N-1
    for (let j = i+1; j < N; j++) { // j i+1 ~ N
      if (data[i] > data[j]) { // 비교하는 부등호에 따라 오름차순/내림차순
        // SWAP
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
   // [3] output
  console.log(data)
})();