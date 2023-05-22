// 23.05.22 for문으로 혼자 푼 것 => k가 바뀌면 틀림
function solution(k, arr) {
  let answer = 0,
    sum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    sum = arr[i] + arr[i + 1] + arr[i + 2];
    console.log(sum);
    answer = Math.max(answer, sum);
  }
  return answer;
}

// 다른사람 풀이
function solution(k, arr) {
  let answer = 0,
    sum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    sum += arr[i];
    if (i >= k) {
      sum -= arr[i - k];
    }
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// 강의풀이: 슬라이딩 윈도우
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
