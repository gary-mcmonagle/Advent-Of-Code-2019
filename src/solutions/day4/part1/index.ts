import {readFileSync} from "fs";
const solve = () => {
  const start = 152085;
  const end = 670283;
  const possible = [];

  for (let i = start; i <= end; i++) {
    if (hasAdjacent(i) && increasesLeftToRight(i)) { possible.push(i); }
  }
  console.log(possible.length);

};

const isValid = (num: number) => {
  return hasAdjacent(num) && increasesLeftToRight(num);
};

const hasAdjacent = (num: number) => {
  const asString = num.toString();
  for (let i = 0; i < asString.length - 1; i++) {
    if (asString[i] === asString[i + 1]) { return true; }
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
