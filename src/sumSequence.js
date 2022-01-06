// 등차수열 : 연속하는 두 수의 차이가 일정한 수열

let maxNum = 20;
let sum = 0;
let sequence;

for (let i = 1; i <= maxNum; i++) {
    if (i % 2 === 0) { // 짝수의 합
        sum += i;
        sequence += i + ' ';
    }
}

console.log(sequence);
console.log(sum);