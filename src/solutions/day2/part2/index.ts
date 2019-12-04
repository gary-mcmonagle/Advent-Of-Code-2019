import {readFileSync} from "fs";
import {IntCodeProgram} from "./IntCodeProgram";

const solve = () => {
  const opcodes = readFileSync("input/day2.txt").toString().split(",").map((code) => Number(code));
  const max = 100;
  let noun;
  let verb;
  nouns: for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      opcodes[1] = i;
      opcodes[2] = j;
      const intCodeProgram = new IntCodeProgram([...opcodes]);
      intCodeProgram.execute();
      if (intCodeProgram.getOutput() === 19690720) {
        noun = i;
        verb = j;
        break nouns;
      }
    }
  }
  console.log(100 * noun + verb);
};

solve();
