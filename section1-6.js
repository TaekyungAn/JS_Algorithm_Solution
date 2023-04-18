// x
//23.04.18
function solution(arr) {
  let answer = [];
  let oddNum = [],
    min = 100,
    sum = 0;

  for (const element of arr) {
    if (element % 2) oddNum.push(element);
  }
  for (const element of oddNum) {
    if (element < min) min = element;
    sum += element;
  }
  answer.push(sum, min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 정답보고 깨달은것
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
      // 이미 홀수로 걸러진것들 중 골라내는거니까
      // 따로 홀수 배열 만들어서 거를필요 없다
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
