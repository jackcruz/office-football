import { PLAYERS_DATA } from './players.data';
import { Player } from '../model/player.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class PlayersService {
  private _players: Array<Player>
  constructor() {
    this._players = _.cloneDeep(PLAYERS_DATA.players);
  }
    
  all() {
    return this._players;
  }

  updateStats(player: Player) {
    const playerToUpdate = _.find(this._players, (p) => p.name === player.name);
    playerToUpdate.victories = player.victories;
    playerToUpdate.goalsScored = player.goalsScored;
    playerToUpdate.gamesPlayed = player.gamesPlayed;
  }
}
