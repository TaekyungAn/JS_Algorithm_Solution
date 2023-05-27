// 23.04.18 내가 푼 답
function solution(s) {
  let answer = 0;
  let lowerCase = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== lowerCase[i]) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// 답
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

// 아스키코드 방법 .charCodeAt()
// 대문자 : 65(A)~90(Z), 소문자: 97(a)~122(z)

// 23.05.27
function solution(s) {
  let count = 0;
  for (let x of s) {
    if (x.charCodeAt() < 91 && x.charCodeAt() > 64) count++;
  }
  return count;
}
