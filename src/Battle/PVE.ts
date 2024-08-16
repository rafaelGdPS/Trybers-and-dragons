import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(private _player: Fighter, private _monters: SimpleFighter[]) {
    super(_player);

    this._player = _player;
    this._monters = _monters;
  }

  fight(): number {
    let result = 0;
    // for (let index = 0; index < this._monters.length; index += 1) {
    //   const element = this._monters[index];

    //   while (result === 0) {
    //     this._player.attack(element);
    //     if (element.lifePoints <= 0) {
    //       result = 1;
    //     }
    //     element.attack(this._player);
    //     if (this._player.lifePoints <= 0) {
    //       result = -1;
    //     }
    //   }
    // }  

    const fighters = this._monters.reduce((acc, result) => {
      
    }, 0)
    return result;
  }
}
export default PVE;