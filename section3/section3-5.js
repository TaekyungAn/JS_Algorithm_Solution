// 23.05.06 X (어렵다?) => 강의 아이디어 듣고 풀어봄봄
function solution(s) {
  let answer = "";
  let counter = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      counter++;
    } else {
      answer += s[i];
      if (counter > 1) {
        answer += counter;
      }
      counter = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
