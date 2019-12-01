import {readFileSync} from "fs";

const fuelRequiredToLaunch = (mass: number) => {
  return ( Math.floor(mass / 3) ) - 2;
};

const solve = () => {
  const result = readFileSync("input/day1.txt").toString().split("\n")
  .map((i) => Number(i))
  .map((i) => fuelRequiredToLaunch(i))
  .reduce((sum, current) => sum + current, 0);
  console.log(result);
};

solve();
