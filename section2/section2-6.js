// 23.04.23 X 2차원 배열
// arr[행][열]
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let row = (column = 0);
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    row = column = 0;
    for (let j = 0; j < n; j++) {
      row += arr[i][j];
      column += arr[j][i];
    }
    answer = Math.max(answer, row, column);
  }
  row = column = 0;
  for (let i = 0; i < n; i++) {
    row += arr[i][i];
    column += arr[i][n - i - 1];
  }
  answer = Math.max(answer, row, column);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
