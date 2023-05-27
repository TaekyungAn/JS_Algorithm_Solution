// 23.04.25 X
function solution(s) {
  let answer = "YES";
  // replace + 정규식표현 으로 알파벳 나머지는 전부 제거
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s !== s.split("").reverse().join("")) answer = "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

// 23.05.27
function solution(s) {
  let lower = s.toLowerCase();
  let original = "";
  for (let i = 0; i < str.length; i++) {
    let n = lower[i].charCodeAt();
    if (96 < n && n < 123) {
      original += lower[i];
    }
  }
  if (original === original.split("").reverse().join("")) return "YES";
  else return "NO";
}
//replace사용으로 하기
