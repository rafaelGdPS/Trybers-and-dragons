import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _instanceCalled = 0;
  private _demageTrought: EnergyType;
  constructor(name: string) {
    super(name);
    this._demageTrought = 'stamina';
    Ranger._instanceCalled += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instanceCalled;   
  }

  get energyType(): EnergyType {
    return this._demageTrought;
  }
}

export default Ranger;