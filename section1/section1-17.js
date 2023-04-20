// 23.04.19 이전 문제 방식 그대로 갖다 씀...
function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) answer.push(s[i]);
  }
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

// 강의: .filter() 사용방법
function solution(s) {
  let answer;
  answer = s.filter((v, i) => s.indexOf(v) === i);
  return answer;
}
