// 23.04.20 답이랑 똑같이 풂!
function solution(arr) {
  let answer = 0,
    score = 0;
  for (let x of arr) {
    if (x === 1) score++;
    else score = 0;
    answer += score;
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
