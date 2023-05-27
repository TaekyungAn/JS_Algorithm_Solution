// 23.04.18 강의 힌트 듣고 풂
function solution(arr) {
  // 전체 합에서 두개씩 골라 빼본다.
  let answer = arr;
  let sum = 0;
  arr.forEach((element) => (sum += element));
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        console.log(i, j);

        arr.splice(j, 1);
        arr.splice(i, 1);
        console.log(sum);
      }
    }
  }
  return answer;
}

// 23.05.26 X
function solution(arr) {
  const sum = arr.reduce((a, c) => a + c, 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
