// [?] 주어진 데이터의 순위를 구하여라

// 순위 알고리즘
(function() {
  // [1] input
  const scores = [90, 87, 100, 95, 80, 87];
  const N = scores.length;
  const rankings = Array(N).fill(1); // 점수 1등으로 초기화, 순환하면서 순위 체크
  // [2] process
  // scores.sort((a,b) => b-a)
  for (let i=0; i<N; i++) {
    rankings[i] = 1; // 1등으로 초기화
    for (let j=0; j<N; j++) {
      if( scores[i] < scores[j] ) { // 현재와 나머지를 비교
        rankings[i]++; // 나보다 큰 점수가 나오면 순위를 증가시킨다.
      }
    }
  }
  // [3] output
  for (let i=0; i<N; i++) {
    console.log(scores[i] + '점의 등수는 : ' + rankings[i] + '입니다.');
  }
})();