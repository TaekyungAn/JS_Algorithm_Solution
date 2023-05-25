// 학급회장 (해쉬)
// new Map() 객체사용
function solution(s) {
  let answer;
  let sH = new Map(); // 빈 객체 생성 (표준내장객체 Map)
  // Map.proto.has(x) : 주어진 key(=x) 값 boolean
  // Map.proto.set(key, value) : key, value값 설정
  // Map.proto.get(x) : 주어진 키(=x)값에 대한 value값 불러옴
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of sH) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
