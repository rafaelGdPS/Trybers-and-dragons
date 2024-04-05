import Race from './Race';

class Halfling extends Race {
  private static _instanceCalled = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instanceCalled += 1;
  } 

  static createdRacesInstances(): number {
    return Halfling._instanceCalled;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;