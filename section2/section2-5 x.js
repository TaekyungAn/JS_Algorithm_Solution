// 강의: Array.from() 사용
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[j]++;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 23.05.27 x

// 다른사람풀이1 :뭐라는거
function solution(arr) {
  const arr_ = arr.map((i) => arr.filter((j) => i < j).length + 1);
  return arr_;
}

// 내가 하고싶었던 풀이 (다른사람풀이2)
function solution(arr) {
  const answer = [];
  // 원본 배열 복사
  const copy = arr.slice();
  // arr 을 정렬한다.
  arr.sort((a, b) => b - a);

  // 배열을 순회하면서 정렬된 배열중에서 원본 배열이 나온 가장 첫번째 인덱스를 가져온다.
  // (인덱스는 0부터 시작하므로 +1을 해준다)
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr.indexOf(copy[i]) + 1);
  }
  return answer;
}
