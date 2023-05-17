function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    if (sum < m) sum += arr[rt];
    else if (sum > m) sum -= arr[lt++];
    else answer++;
    console.log(sum);
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
