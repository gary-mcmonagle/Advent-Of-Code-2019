import {readFileSync} from "fs";
import {IntCodeProgram} from "./IntCodeProgram";

const solve = () => {
  const opcodes = readFileSync("input/day2.txt").toString().split(",").map((code) => Number(code));
  const intCodeProgram = new IntCodeProgram(restoreGravityAssist(opcodes));
  intCodeProgram.execute();
  console.log(intCodeProgram.opcodes[0]);
};

const restoreGravityAssist = (opcodes: number[]) => {
  opcodes[1] = 12;
  opcodes[2] = 2;
  return opcodes;
};

solve();
