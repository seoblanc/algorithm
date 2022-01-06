// 개수 알고리즘 : 주어진 범위 내의 주어진 조건에 충족하는 갯수
// [?] 1~1000 까지의 정수 중 13의 배수의 갯수

// input
let count = 0;
const nlength = 1000;
const arr = Array.from({ length: nlength }, (_, i) => i + 1);
// process
for (let i = 1; i <= nlength; i++) {
    if (i % 13 === 0) {
        count++;
    }
}

// output
console.log(count);