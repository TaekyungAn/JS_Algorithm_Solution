// 23.06.11 버블정렬응용 (강의)
// 그냥 쉬운 방법은 배열 한바퀴 돌면서 음수만 푸쉬하고 나머지 푸쉬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 다른사람이 푼 방법
function solution(arr) {
  let answer;
  let plus = [];
  let minus = [];

  for (let x of arr) {
    if (x < 0) minus.push(x);
    else plus.push(x);
  }
  answer = [...minus, ...plus];
  return answer;
}

// 23.06.29 X
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}
