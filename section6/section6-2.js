// 23.05.29 내가 푼 정답
function solution(s) {
  let answer = "";
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else if (x === ")") stack.pop();
    else if (stack.length === 0) answer += x;
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

// 강의 풀이
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

// 다른사람풀이1 : 카운트
function solution(s) {
  let answer = [];
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt++;
    else if (s[i] === ")") cnt--;
    if (cnt < 0) return false;
    if (cnt === 0 && s[i] !== ")") answer.push(s[i]);
  }
  return answer.join("");
}
