// X 23.04.19
// 강의: .indexOf(찾는값)사용
// => 주어진 값과 일치하는 "첫 번째" 인덱스를 반환
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    // 최초 문자열만 추가할 수 있는 로직
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

// 23.05.27 ...비효율적인듯
function solution(s) {
  let answer = "";
  const arr = Array.from(new Set(s));
  for (let x of arr) {
    answer += x;
  }
  return answer;
}
