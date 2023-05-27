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

// 23.05.27
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let height = (width = 0);

  //가로세로
  for (let i = 0; i < n; i++) {
    height = width = 0;
    for (let j = 0; j < n; j++) {
      width += arr[i][j];
      height += arr[j][i];
    }
    answer = Math.max(width, height, answer);
  }

  //대각선
  height = width = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) width += arr[i][j];
      if (n - i - 1 === j) height += arr[i][j];
    }
    answer = Math.max(width, height, answer);
  }
  return answer;
}

function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  let sum3 = (sum4 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
      // 대각선 줄
      if (i === j) {
        sum3 += arr[i][j];
      }
      // 역 대각선 줄
      if (j === arr[i].length - i - 1) {
        sum4 += arr[i][j];
      }
    }
    answer = Math.max(answer, sum1, sum2, sum3, sum4);
  }

  return answer;
}
