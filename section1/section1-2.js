// 삼각형의 두 변의 길이의 합은 나머지 한 변의 길이보다 크다.
function solution(a, b, c) {
  let answer = "YES";
  if (!(a + b > c && a + c > b && b + c > a)) answer = "NO";
  return answer;
}

// 23.05.26
function solution(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) return "YES";
  else return "NO";
}
console.log(solution(6, 7, 11));
