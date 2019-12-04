import {readFileSync} from "fs";
import {Grid} from "./Grid";
import { IWireTracing } from "./IWireTracing";
import {Wire} from "./Wire";

const solve = () => {
  const wires = readFileSync("input/day3.txt").toString().split("\n").map((wire) => {
    return wire.split(",").map((tracing) => {
      const formattedTracing: IWireTracing = {
        direction: tracing.substring(0, 1),
        distance: Number(tracing.substring(1)),
      };
      return formattedTracing;
    });
  });

  const myGrid = new Grid(wires.map((w) => new Wire(w)));
  const steps = myGrid.getCrossSections().map((cs) => myGrid.getTotalStepsToCrossSection(cs));
  console.log(Math.min(...steps));
};
solve();
