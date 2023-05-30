// 내가 푼 이상한 풀이.
function solution(s) {
  let answer = "";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let lastbefore = Number(stack.at(-2));
    let last = Number(stack.at(-1));
    if (s[i] === "+") {
      let cal = lastbefore + last;
      stack.pop();
      stack.pop();
      stack.push(cal);
    } else if (s[i] === "*") {
      let cal = lastbefore * last;
      stack.pop();
      stack.pop();
      stack.push(cal);
    } else if (s[i] === "-") {
      let cal = lastbefore - last;
      stack.pop();
      stack.pop();
      stack.push(cal);
    } else if (s[i] === "/") {
      let cal = stack.at(-2) / stack.at(-1);
      stack.pop();
      stack.pop();
      stack.push(cal);
      continue;
    } else stack.push(s[i]);
    console.log(stack);
  }
  return answer;
}

let str = "352+*9-";
console.log(solution(str));

// 강의
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}
