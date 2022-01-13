// [?] N명의 점수 중 80점 이상 95점 이하인 점수들의 평균

(function() {
    // [1] input
        const scores = [90, 50, 70, 80, 75, 65, 100, 85, 88, 92, 66];
        let sum = 0;
        let count = 0;
        let N = scores.length;

        // [2] process
        scores.filter(score => {
            if(score >= 80 && score <= 95) {
                sum += score;
                count++;
            }
        })
        let avg = 0;
        if(sum != 0 && count != 0) {
            avg = sum/count;
        }

    // [3] output
        console.log(avg)
})();