function solution(test) {
  let answer = 0; // 짝 카운트한 숫자 넣으면 됨
  let N = test[0].length; // 학생 숫자
  let M = test.length; // 시험 횟수
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      let cnt = 0;
      for (let k = 0; k < M; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < N; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
          //   console.log(pi, pj);
        }
        if (pi < pj) cnt++;
      }
      if (cnt === M) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
