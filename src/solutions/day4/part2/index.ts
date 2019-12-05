import {readFileSync} from "fs";
const solve = () => {
  const start = 152085;
  const end = 670283;
  const possible = [];

  for (let i = start; i <= end; i++) {
    if (containsAdjacent(i) && increasesLeftToRight(i)) { possible.push(i); }
  }
  console.log(possible.length);
};

const containsAdjacent = (num: number) => {
  const asString = num.toString();
  for (let i = 0; i < asString.length; i++) {
    let count = 0;
    let j = i;
    do {
      if (asString[i] === asString[j]) {
        count ++;
        j++;
      }
    } while (asString[i] === asString[j]);
    i = j - 1;
    if (count == 2) { return true; }
  }
  return false;
};

const increasesLeftToRight = (num: number) => {
  const asString = num.toString();
  for (let i = 0; i < asString.length - 1; i++) {
    if (Number(asString[i]) > Number(asString[i + 1])) { return false; }
  }
  return true;
};

solve();
