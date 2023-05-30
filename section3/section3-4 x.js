// 23.04.26 X
// 23.05.06 X
function solution(s, t) {
  let answer = [];
  let p = 100;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 100;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) p = 0;
    else {
      p++;
      answer[j] = Math.min(answer[j], p);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

// 23.05.27 정답은 맞췄지만 너무 지저분
function solution(s, t) {
  let arr1 = s.split("");
  let arr2 = s.split("");
  let arr = [];
  let n = s.length;
  let counter = 100;
  for (let i = 0; i < n; i++) {
    if (arr1[i] === t) counter = 0;
    arr1[i] = counter;
    counter++;
  }
  counter = 100;
  for (let i = n - 1; i >= 0; i--) {
    if (arr2[i] === t) counter = 0;
    arr2[i] = counter;
    counter++;
  }
  for (let i = 0; i < n; i++) {
    arr.push(Math.min(arr1[i], arr2[i]));
  }
  return arr;
}
