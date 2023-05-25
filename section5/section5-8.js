// 23.05.25 강의 (해쉬, 투포인터, 슬라이딩윈도우)

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) == !val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map(); //s
  let tH = new Map(); //t

  // t 문자열 각각을 전부 tH객체에 담아둔다.
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // s문자열에서 t문자열개수에서 하나 뺀 개수만큼만 sH객체에 담는다.
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    sH.set(s[i], 1);
  }
  console.log(sH);

  // sH에 s문자열 하나만 추가(rt)시켜서 tH와 비교한 후 첫번째 문자(lt)는 한칸 앞으로 이동한다.
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
    console.log(sH, tH);
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

// 다른 풀이 : 모르겠다;
function compareMaps(mapA, mapB) {
  if (mapA.size !== mapB.size) {
    return false;
  }
  for (let [key, value] of mapA) {
    if (!mapB.has(key) || mapB.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function solution(s, t) {
  let mapA = new Map(); //s "bacaAacba"
  let mapB = new Map(); //t "abc"
  let lt = 0;
  let n = t.length;
  let answer = 0;
  for (let rt = 0; rt < s.length; rt++) {
    // rt<3이면
    if (rt < n) mapB.set(t[rt], mapB.get(t[rt]) + 1 || 1);
    mapA.set(s[rt], mapA.get(s[rt]) + 1 || 1);
    console.log(mapB, mapA);
    // rt=>3이면 lt제거작업
    if (rt >= n) {
      mapA.get(s[lt]) == 1
        ? mapA.delete(s[lt])
        : mapA.set(s[lt], mapA.get(s[lt]) - 1);
      lt++;
    }
    // rt>=2이면 비교작업
    if (rt >= n - 1) {
      if (compareMaps(mapA, mapB)) answer++;
    }
  }

  return answer;
}

// 쌤 다른풀이 : 아직 안 봄
function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  for (let x of t) {
    sH.set(x, (sH.get(x) || 0) - 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    if (sH.get(s[i]) === 0) sH.delete(s[i]);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
    if (sH.size === 0) answer++;
    sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
