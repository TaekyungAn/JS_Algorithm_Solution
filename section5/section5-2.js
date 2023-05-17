function solution(arr1, arr2) {
  let answer = [];
  for (let x of arr1) {
    for (let y of arr2) {
      if (x === y) answer.push(x);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// 강의: 투포인터로 풀기
function solution(arr1, arr2) {
  let answer = [];
  let p1 = (p2 = 0);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
}
