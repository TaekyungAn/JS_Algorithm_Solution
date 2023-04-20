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
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
