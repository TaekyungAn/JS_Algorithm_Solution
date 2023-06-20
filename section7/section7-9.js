// 23.06.20 강의
function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  // 입장시간과 퇴장시간을 각 배열로 분리하고 입장(s)/퇴장(e) 으로 구분한다.
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  // 구분시킨 배열을, 숫자는 작은숫자부터, 알파벳은 퇴장(e)먼저 순서로 나열한다.
  T_line.sort((a, b) => {
    // 숫자가 같으면 e먼저
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  // 위에서 정리한 배열을 돌면서 s를 만나면 +1, e를 만나면 -1을 한다.
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt); // 최대 숫자면 answer교체
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
