import {readFileSync} from "fs";
import {IntCodeProgram} from "./IntCodeProgram";

const solve = () => {
  const initialState = readFileSync("input/day5.txt").toString().split(",").map((code) => Number(code));
  const icp = new IntCodeProgram(initialState);
  icp.execute();
};

solve();
