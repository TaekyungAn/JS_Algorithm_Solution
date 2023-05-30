function solution(str) {
  let answer = str.replace(/[^0-9]/g, "");
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

// 메소드 사용 안하고 풀기
function solution(str) {
  answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

// parseInt 사용 안하고 풀기
function solution(str) {
  answer = 0;
  for (let x of str) {
    // 0*10+0 = 0
    // 0*10+0 = 0
    // 0*10+2 = 2
    // 2*10+0 = 20
    // 20*10+8 = 208
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

function solution(params) {
  let answer = "";
  for (let x of params) {
    let ascii = x.charCodeAt();
    if (47 < ascii && ascii < 58) answer += x;
  }

  return Number(answer);
}
