import {readFileSync} from "fs";
import {Galaxy} from "./Galaxy";
import {Orbital} from "./Orbital";

const solve = () => {
  const oribits = readFileSync("input/day6.txt").toString().split("\n").map((ro) => {
    return new Orbital(ro.split(")")[1], ro.split(")")[0]);
  });
  const galaxy = new Galaxy(oribits);
  console.log(galaxy.getGalaxyTotalOrbits());
};

solve();
