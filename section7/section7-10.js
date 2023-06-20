// 이분검색
// 23.06.20 강의
function solution(target, arr) {
  let answer;
  // 오름차순으로 정리해두고
  arr.sort((a, b) => a - b);
  // 끝과 끝에 포인터 둔 다음
  let lt = 0;
  let rt = arr.length - 1;
  // 둘이 만날때 까지만 돎
  while (lt <= rt) {
    // 절반 지점에 포인터 가르키고
    let mid = parseInt((lt + rt) / 2);
    // 절반지점이 타겟이면 답, 멈춤
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    }
    // 절반지점이 타겟보다 크면 그 아래쪽에서 다시 찾음
    else if (arr[mid] > target) rt = mid - 1;
    // 절반지점이 타겟보다 작으면 그 위쪽에서 다시 찾음
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
