import { PLAYERS_DATA } from './players.data';
import { Player } from '../model/player.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GamesService {
  private _games: Map<number, Map<number, Array<Player>>>;
  constructor() {
    this._games = new Map();
  }

  all() {
    return this._games;
  }

  save(gameId: number, game: Map<number, Array<Player>>) {
    this._games.set(gameId, game);
  }
  
}
