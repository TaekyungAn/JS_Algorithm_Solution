// 그리디 대표문제 (최대한 많은)
// 회의가 "일찍 끝나는게" 우선으로 정렬
// 23.06.19 강의
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    // 회의 끝나는 시간이 다음 회의 시작시간보다 작거나 같으면
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
