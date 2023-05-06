// 23.04.26 X
// 23.05.06 X
function solution(s, t) {
  let answer = [];
  let p = 100;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 100;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) p = 0;
    else {
      p++;
      answer[j] = Math.min(answer[j], p);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
