function solution(m, arr) {
  let answer = 0;
  let lt = (rt = 0);
  let sum = arr[rt];
  while (rt < arr.length) {
    if (sum <= m) {
      answer += rt - lt + 1;
      rt++;
      sum += arr[rt];
    } else {
      sum -= arr[lt];
      lt++;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
