// 23.05.16
// *중복값 제거 방법
function solution(n, k, card) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i <= n - k; i++) {
    for (let j = i + 1; j <= n - k + 1; j++) {
      for (let s = j + 1; s <= n - k + 2; s++) {
        // set객체는 .push 아님
        tmp.add(card[i] + card[j] + card[s]);
      }
    }
  }
  // set객체는 배열화 시켜야 함
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
