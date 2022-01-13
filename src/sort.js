/** 정렬 알고리즘
 * 불규칙적으로 나열된 순서를 일정 기준에 따라 순서대로 나열하는 알고리즘
 * 선택정렬, 버블정렬, 퀵정렬...
 * 오름차순, 내림차순
*/

/** 선택정렬
 * 데이터 하나를 기준으로 다른 데이터와 비교하여 가장 작거나 큰 데이터와 자리를 바꾸며 반복 비교하는 정렬 방법
 * 데이터의 개수가 n개이면 전체 회전수는 n-1회 이다. O(n2)
 */

const arr = [22, 55, 45, 47, 30];
const N = arr.length;

for (let i = 0; i<N; i++) {
  let target = arr[i];
  for (let j=i+1; j<N; j++) {
    if (target > arr[j]) {
      arr[i] = arr[j];
      arr[j] = target;
      target = arr[i];
    }
  }
}

console.log(arr);