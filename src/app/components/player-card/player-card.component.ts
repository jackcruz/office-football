import { PlayersService } from '../../services/players.service';
import { Player } from '../../model/player.model';
import { PLAYERS_DATA } from '../../services/players.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {

  private _player: Player;
  constructor() { }

  @Input()
  detailedView: boolean = false;

  @Input()
  set player(player: Player) {
    this._player = player;
  }

  get player() {
    return this._player;
  }

  toggleDetailView() {
    this.detailedView = !this.detailedView;
  }
}
