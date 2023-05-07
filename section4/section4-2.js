function isPrime(num) {}
function solution(arr) {
  let answer,
    rev = "";
  for (let x of arr) {
    let tmp = x;
    rev = "";
    while (tmp) {
      rev += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    console.log(Number(rev));
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
