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
  const closest = Math.min(...myGrid.getCrossSections().map((cs) =>Math.abs(cs.xCord) + Math.abs(cs.yCord)));
  console.log(closest);

};
solve();
