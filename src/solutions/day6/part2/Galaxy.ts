import {Orbital} from "./Orbital";
export class Galaxy {
  public orbitals: Orbital[] = [new Orbital("COM", null)];

  constructor(orbitals: Orbital[]) {
    this.orbitals = this.orbitals.concat(orbitals);
  }

  public getDistanceBetweenOrbits(orbitIDOne: string, orbitIDTwo: string) {
    const journeyOne = this.getJourneyToCOM(this.getOrbitById(orbitIDOne));
    const journeyTwo = this.getJourneyToCOM(this.getOrbitById(orbitIDTwo));
    const common = [];
    one: for (let i = 0; i < journeyOne.length; i++) {
      for (let j = 0; j < journeyTwo.length; j++) {
        if (journeyOne[i] === journeyTwo[j]) {
          common.push({
            distance: (i + 1) + (j + 1),
            id: journeyOne[i],
          });
          break one;
        }
      }
    }
    const lowestCommon = common.sort((a, b) => a.distance < b.distance ? 1 : -1)[0];
    return journeyOne.indexOf(lowestCommon.id) + journeyTwo.indexOf(lowestCommon.id);
  }

  private getJourneyToCOM(orbital: Orbital) {
    let parent = orbital.orbits;
    const journey = [];
    while (!!parent) {
      journey.push(parent);
      parent = this.getOrbitById(parent).orbits;
    }
    return journey;
  }

  private getOrbitById(id: string) {
    return this.orbitals.filter((o) => o.id === id)[0];
  }

}
