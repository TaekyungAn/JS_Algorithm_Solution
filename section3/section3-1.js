// 23.04.25 X
function solution(s) {
  let answer = "YES";
  let lower = s.toLowerCase();
  n = s.length;
  for (let i = 0; i < parseInt(n / 2); i++) {
    if (lower[i] !== lower[n - 1 - i]) answer = "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));

// reverse 메소드
function solution(s) {
  let answer = "YES";
  let lower = s.toLowerCase();
  n = s.length;
  if (lower.split("").reverse().join("") !== lower) return "NO";
  return answer;
}

// 23.05.27
function solution(s) {
  let lowerCase = s.toLowerCase();
  let reverse = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reverse += lowerCase[i];
  }
  if (lowerCase === reverse) return "YES";
  else return "NO";
}
