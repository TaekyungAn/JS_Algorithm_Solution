// X 23.04.19
// 강의: .indexOf(찾는값)사용 => 인덱스 반환
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) answer += s[i];
  }

  return answer;
}
console.log(solution("ksekkset"));

// +) indexOf()를 사용하여 특정 문자열 개수세기
function solution(s) {
  let answer = 0;
  let pos = s.indexOf("k");
  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }

  return answer;
}
