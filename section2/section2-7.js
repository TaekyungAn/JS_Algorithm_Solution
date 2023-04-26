// 23.04.23 어렵넹?
// 23.04.25 다시 풀었는데 맞추지 못함
function solution(arr) {
  let answer = 0;
  let dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];
  n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k],
          ny = j + dy[k];
        if (
          // 배열 내 존재 (0<=인덱스<n)
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          // 젤 높은 수가 아님
          arr[i][j] <= arr[nx][ny]
        ) {
          // 카운트 안 함
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
