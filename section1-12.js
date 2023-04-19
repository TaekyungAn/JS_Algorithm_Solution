// 23.04.19 내가 푼 문제
function solution(s) {
  // let answer = s.slice().toUpperCase();
  // return answer;
  return s.toUpperCase();
}

let str = "ItisTimeToStudy";
console.log(solution(str));

// 아스키코드 이용
function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122)
      answer += String.fromCharCode(num - 32); // 코드를 문자로 되돌림
    else answer += x;
  }
  return answer;
}
