// 23.04.19
function solution(s) {
  let answer;
  let maxlength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].length > maxlength) {
      maxlength = s[i].length;
      answer = s[i];
    }
  }
  return answer;
}

// 23.05.27 X
// stirng길이 구하는 방법을 못떠올림;;; (length)
function solution(s) {
  let answer;
  let max = 0;
  for (let x of s) {
    if (x.length > max) {
      answer = x;
      max = x.length;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
