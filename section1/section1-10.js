function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// 굿아이디어: 내장함수 split() - 구분자
function solution(s, t) {
  let answer = s.split(t).length;
  console.log(s.split(t));
  return answer - 1;
}

// 23.05.26
function solution(s, t) {
  let count = 0;
  for (let x of s) {
    if (x === t) count++;
  }
  return count;
}
