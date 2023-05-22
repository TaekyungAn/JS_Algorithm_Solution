// 23.05.22 강의
function solution(str1, str2) {
  let answer = "YES";
  let sH1 = new Map();
  // str1을 객체에 담고
  for (let x of str1) {
    if (sH1.has(x)) sH1.set(x, sH1.get(x) + 1);
    else sH1.set(x, 1);
  }
  // str2를 돌면서 str1의 객체와 비교 함
  for (let x of str2) {
    if (!sH1.has(x) || sH1.get(x) === 0) return "NO";
    sH1.set(x, sH1.get(x) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
