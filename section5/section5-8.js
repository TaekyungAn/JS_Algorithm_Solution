function solution(map1, map2) {
  let answer;
  let sum = "";
  let lng1 = map1.length;
  let lng2 = map2.length;
  for (let i = 0; i <= lng1 - lng2; i++) {
    sum += map1[i];
    if (i >= lng2) sum -= map1[i - lng2];
    console.log(map1[i - lng2]);
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
console.log("abc" - "a");
