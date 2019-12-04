import {readFileSync} from "fs";

const fuelRequiredToLaunch = (mass: number) => {
  let requiredFuel = 0;
  while (true) {
    const fuelNeeded = (Math.floor(mass / 3)) - 2;
    if (fuelNeeded <= 0) { return requiredFuel; }
    requiredFuel += fuelNeeded;
    mass = fuelNeeded;
  }
};

const solve = () => {
  const result = readFileSync("input/day1.txt").toString().split("\n")
  .map((i) => Number(i))
  .map((i) => fuelRequiredToLaunch(i))
  .reduce((sum, current) => sum + current, 0);
  console.log(result);
};

solve();
