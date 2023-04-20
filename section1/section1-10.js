function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// 내장함수 split() - 구분자
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}
