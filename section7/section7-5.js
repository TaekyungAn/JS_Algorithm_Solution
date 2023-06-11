// 23.06.11
// 내장함수 있는대로 쓴(;) 내가 푼 풀이 (no 삽입정렬)
// O(n^2)
function solution(size, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer.unshift(arr[i]);
    } else {
      answer = answer.filter((e) => e !== arr[i]);
      answer.unshift(arr[i]);
    }
    if (answer.length > size) answer.pop();
  }
  return answer;
}

// 예제
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// 강의 풀이 (삽입정렬)
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    // hit시 필요한 인덱스 번호 저장
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;

    // miss인 경우
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // hit인 경우
    else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

// 강의 풀이 (내장함수)
function solution(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    // hit시 필요한 인덱스 번호 저장 (indexOf기능)
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    // miss인 경우
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    }
    // hit인 경우
    else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
}

// 다른사람풀이 1
function solution(size, arr) {
  const cache = new Array(size).fill(0);
  let hit;
  for (let i = 0; i < arr.length; i++) {
    hit = false;
    for (let j = cache.length - 1; j >= 0; j--) {
      if (hit) {
        cache[j + 1] = cache[j];
      }
      if (cache[j] === arr[i]) {
        hit = true;
      }
    }
    if (!hit) {
      cache.unshift(arr[i]);
      cache.pop();
    } else cache[0] = arr[i];
  }

  return cache;
}

// 다른사람풀이 2 : O(n^2)
function solution(n, arr) {
  let answer = "";
  let cash = Array.from({ length: n }, () => 0);
  for (let x of arr) {
    if (cash.indexOf(x) < 0) {
      cash.unshift(x);
      cash.pop();
    } else {
      cash.splice(cash.indexOf(x), 1);
      cash.unshift(x);
    }
  }
  answer = cash;
  return answer;
}
