// 23.04.19
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2) {
    answer = s[mid];
  } else {
    answer = s[mid - 1] + s[mid];
  }
  return answer;
}
console.log(solution("study"));

// 강의: substring(자르기시작인덱스,자르고난후인덱스) 사용
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}
// substr(자르기시작인덱스,자를개수)

// 23.05.27
function solution(s) {
  const num = s.length;
  if (num % 2) {
    const forodd = Math.floor(num / 2);
    return s[forodd];
  } else {
    return s[num / 2 - 1] + s[num / 2];
  }
}
