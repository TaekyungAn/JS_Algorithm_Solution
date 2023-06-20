// 23.06.19 강의
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]; // x좌표 같으면 y좌표 작은 순서로
    else return a[0] - b[0];
  });
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
