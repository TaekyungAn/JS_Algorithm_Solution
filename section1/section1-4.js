// 시간복잡도 O(n)
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}

// 23.05.26
// 시간복잡도 O(n)
function solution(n) {
  let answer = 0;
  let i = 1;
  while (i <= n) {
    answer += i;
    i++;
  }
  return answer;
}

// 재귀함수
function solution(n) {
  const sum = (n) => {
    if (n === 1) {
      return 1;
    }
    return n + sum(n - 1);
  };
}

// 시간복잡도 O(1)
function solution(n) {
  const sum = (n) => {
    return (n * (n + 1)) / 2;
  };
}

console.log(solution(10));
