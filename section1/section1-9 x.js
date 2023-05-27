// 23.04.18 내가 푼 답
function solution(s) {
  let answer;
  const arr = [...s];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") arr.splice(i, 1, "#");
  }
  answer = arr.join("");
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// 정답 진짜 빨리 푼다...(배열 만들 필요 없네)
// 1. '#'을 축적하는 방법
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

// 2. replace() 방법
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#"); // g= 전역
  return answer;
}

// 23.05.26 X
function solution(s) {
  return s.replace(/A/g, "#");
}

// 이거 안되나? 왜 안되지
/*
function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      s[i] = "#";
    }
  }
  return s;
}
*/
