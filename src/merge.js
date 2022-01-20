/**
 * 병합(Merge) 알고리즘 (병합정렬)
 * Array A [1,3,5]
 * Array B [2,4]
 * Array Merge [1,2,3,4,5] { length:  A.length + B.length }
 */

// [?] 2개의 정수 배열 합치기 : 2개의 정수 배열은 오름차순으로 정렬되어 있다.
// 병합 알고리즘 : 오름차순으로 정렬되어 있는 정수 배열을 하나로 병합
(function() {
    // [1] input
    const arrayA = [ 1, 3, 5 ];
    const arrayB = [ 2, 4 ];
    const M = arrayA.length;
    const N = arrayB.length;
    let merged = Array(M+N).fill(0);
    let i = j = k = 0;
    // [2] process
    while (i< M && j<N) { // 둘 중 한 배열의 끝에 도달할때까지
        if (arrayA[i] < arrayB[j]) {
            merged[k] = arrayA[i];
            k++;
            i++;
            console.log(merged)
        }else{
            merged[k] = arrayB[j]
            k++;
            j++;
            console.log(merged)
        }
    }
    while (i<M) {
        merged[k] = arrayA[i];
        k++;
        i++;
    }
    while (j<N) {
        merged[k] = arrayB[j]
        k++;
        j++;
    }
    // [3] output
    console.log(merged);
})();