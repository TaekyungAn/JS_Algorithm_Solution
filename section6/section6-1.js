// 23.05.29
function solution(s) {
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      // 닫는 괄호가 더 많은 상황
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  // 여는 괄호가 더 많은 상황
  if (stack.length !== 0) return "NO";
  return "YES";
}
let a = "()(()))";
console.log(solution(a));
