// 합계 알고리즘

// 1. input
const scores = [100, 80, 75, 85, 95, 50, 60];
const nlength = scores.length;
let result = 0;

// 2.Process 조건 필터링
for (let i = 0; i < nlength; i++) {
    if (scores[i] >= 70) {
        result += scores[i];
    }
}

// 3.output
console.log(nlength + '명 중 70점 이상의 합계 점수는 : ' + result + '입니다.');