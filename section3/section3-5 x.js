// 23.05.06 X (어렵다?) => 강의 아이디어 듣고 풀어봄
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

// 23.05.27 복잡하게 풂 => 강의 풀이가 훨씬 낫다.
function solution(s) {
  let answer = "";
  let x = new Map();
  for (let i = 0; i < s.length; i++) {
    if (x.has(s[i])) x.set(s[i], x.get(s[i]) + 1);
    else x.set(s[i], 1);
  }
  for (let [key, value] of x) {
    if (value > 1) answer += key + value;
    else answer += key;
  }
  return answer;
}

function solution(s) {
  let answer = "";
  let counter = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) counter++;
    else {
      answer += s[i];
      if (counter > 1) answer += counter;
      counter = 1;
    }
  }
  return answer;
}
