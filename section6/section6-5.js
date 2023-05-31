// 23.05.30
// 강의 아이디어 얻고 풀어서 답은 똑같았는데 강의가 훨~씬 단축해서 풂
// 그래서 강의 베낌
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }
  return answer;
}
let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
