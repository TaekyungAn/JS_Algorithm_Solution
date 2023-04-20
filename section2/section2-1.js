// 23.04.20
// 틀렸지만 아쉬워서 냅둠
function solution(arr) {
  let answer = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    // answer의 가장 마지막 값
    if (answer[answer.length - 1] < arr[i + 1]) answer.push(arr[i + 1]);
    console.log(answer);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

// 엥?? 겨우 풀었더니 내가 문제 이해 잘못한거였음 => 새로 담긴 배열에서 앞 숫자보다 커야하는 줄
// 원래 문제대로 풀면 개쉬움; => 그냥 바로 원배열에서 앞 숫자보다만 크면 됨
function solution(arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) answer.push(arr[i]);
    console.log(answer);
  }
  return answer;
}
