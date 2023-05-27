// 23.04.20
function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push("D");
    // if (
    //   (a[i] === 1 && b[i] === 2) ||
    //   (a[i] === 2 && b[i] === 3) ||
    //   (a[i] === 3 && b[i] === 1)
    // )
    // answer.push("B");
    if (
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2) ||
      (a[i] === 1 && b[i] === 3)
    )
      answer.push("A");
    else answer.push("B");
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
// 1,2 => 2
// 2,3 => 3
// 3,1 => 1

// 23.05.27
function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push("D");
    else if (
      (a[i] === 1 && b[i] === 2) ||
      (a[i] === 2 && b[i] === 3) ||
      (a[i] === 3 && b[i] === 1)
    )
      answer.push("B");
    else answer.push("A");
  }
  return answer;
}
