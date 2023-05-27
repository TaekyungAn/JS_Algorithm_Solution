// x
// 강의 답
// function solution(arr){
//     let answer, min=Number.MAX_SAFE_INTEGER;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<min) min=arr[i];
//     }
//     answer=min;
//     return answer;
// }

// 검색 답
function solution(arr) {
  //let answer = Math.min.apply(null, arr); //Function.prototype.apply()
  let answer = Math.min(...arr); //전개연산자
  return answer;
}

// 23.05.23
function solution(arr) {
  // arr.sort((a, b) => b - a);
  // return arr.at(-1);
  arr.sort((a, b) => a - b);
  return arr[0];
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
