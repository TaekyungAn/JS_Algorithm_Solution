function solution(a, b, c) {
  let answer;
  if (a > b) answer = b;
  else answer = a;
  if (answer > c) return c;
  else return answer;
}

// 23.05.26
function solution(a, b, c) {
  return Math.min(a, b, c);
}
console.log(solution(2, 5, 1));
