import { GamesService } from '../services/games.service';
import { Player } from '../model/player.model';
import { PlayersService } from '../services/players.service';
import { Component, OnInit } from '@angular/core';
import { MdTabChangeEvent } from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _players: Array<Player>;
  private _game: Map<number, Array<Player>> = null;

  constructor(private playersService: PlayersService, private gamesService: GamesService) { }

  get players() {
    return this._players;
  }

  get game() {
    return this._game;
  }

  ngOnInit() {
    this._players = this.playersService.all();
  }

  onTabSelect() {
    this._game = this.gamesService.all().get(1);
  }
}
