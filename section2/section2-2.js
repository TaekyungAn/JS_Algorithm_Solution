// 23.04.20
// 직전에 잘못푼 문제 방식대로 똑같이 풂 (코드가 긺)
function solution(arr) {
  let answer;
  let line = [];
  line.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (line[line.length - 1] < arr[i]) line.push(arr[i]);
    answer = line.length;
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

// 강의 답: max를 젤 키큰놈으로 교체해준다
function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}
