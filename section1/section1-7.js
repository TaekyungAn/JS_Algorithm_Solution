// X 23.04.18
function solution(day, arr) {
  let answer = 0;
  // 숫자 첫째자리숫자가 day와 일치하는 개수
  for (let carNum of arr) {
    if (carNum % 10 === day) answer++; // 1의자리 구하는 팁!!
  }
  return answer;
}

// 23.05.26
function solution(day, arr) {
  let count = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 10 === day) count++;
    i++;
  }
  return count;
}
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
