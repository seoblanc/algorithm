/**
 * 검색 알고리즘
 * 배열 등 데이터에서 특정 값을 검색하는 알고리즘
 * 순차검색 : 전체 데이터를 순서대로 탐색
 * 이진검색 : 정렬된 데이터를 절반으로 나누어 탐색
 *  - 중간 인덱스를 mid로 놓고 low 는 0 high는 배열 길이 -1
 *  - mid = (low + high) / 2
 *    찾을 데이터가 맞는지, 큰지, 작은지 체크 하여 왼쪽(low = mid+1), 오른쪽(high=mid-1)을 탐색할지 정한다.
*/

// [?] 정렬되어 있는 데이터를 이진 검색을 사용하여 검색하라.
// 검색 알고리즘 : 주어진 데이터에서 특정 데이터를 찾는다.
(function() {
  // [1] input
  const data = [3, 1, 7, 5, 9];
  data.sort( (a,b) => a-b);
  const N = data.length;
  const target = 3;

  let flag = false; // 결과 내용 저장
  let index = -1; // 결과 인덱스
  // [2] process
  let low = 0;
  let high = N-1;
  while (low <= high) { //low,high가 만날때까지 반복
    let mid = parseInt((low + high) / 2);
    if (data[mid] === target) {
      flag = true;
      index = mid;
      break;
    }
    if (data[mid] > target) {
      high = mid -1;
    }else {
      low = mid +1;
    }
  }
  // [3] output
  if (flag) {
    console.log(target + '을(를)' + index + '위치에서 찾았습니다.');
  }else {
    console.log('데이터를 찾지 못했습니다.');
  }
})();