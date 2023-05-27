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

// 강의: .filter() +indexOf
function solution(s) {
  let answer;
  answer = s.filter((v, i) => s.indexOf(v) === i);
  return answer;
}

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer.push(s[i]);
  }
  return answer;
}

// 23.05.27 filter + includes
function solution(s) {
  let answer = [];
  s.filter((item) => (!answer.includes(item) ? answer.push(item) : null));
  return answer;
}
