function solution(n, arr) {
  let answer;
  let sum = 0;
  max = 0;
  for (let x of arr) {
    max = Math.max(sum);

    sum = 0;
    for (let y of String(x)) {
      console.log(y);
      sum += parseInt(y);
      console.log(sum);
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
