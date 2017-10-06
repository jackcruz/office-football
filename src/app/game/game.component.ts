import { Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { PlayersService } from '../services/players.service';
import { Player } from '../model/player.model';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Component({
  selector: 'game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.scss']
})
export class GameComponent {

  selectedPlayer = new FormControl();
  players: Array<Player>;
  filteredPlayers: Observable<Array<Player>>;
  selectedTeam: number = 0;
  teamA: Array<Player> = [];
  teamB: Array<Player> = [];
  winnerTeam: number;
  
  @Input()
  newGame: boolean = true;

  private _gameToEdit: Map<number, Array<Player>>;
  
  @Input()
  set gameToEdit(game: Map<number, Array<Player>>) {
    if (game) {
      this._gameToEdit = game;
      this.teamA = this._gameToEdit.get(0);
      this.teamB = this._gameToEdit.get(1);
    }
  }

  constructor(
    private playersService: PlayersService,
    private gamesService: GamesService,
    private router: Router) {

  }

  ngOnInit() {
    if (this.newGame) {
      this.players = _.cloneDeep(this.playersService.all());
      this.filteredPlayers = this.selectedPlayer.valueChanges
        .startWith(null)
        .map(player => player && typeof player === 'object' ? player.name : player)
        .map(name => name ? this.filter(name) : this.players.slice());
    } 

  }

  filter(name: string): Player[] {
    return this.players.filter(player =>
      player.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(player: Player) {
    return player ? player.name : player;
  }

  reset() {
    let playerToRemove = this.selectedPlayer.value;
    _.remove(this.players, (player) => {
      return playerToRemove.name === player.name;
    });
    this.selectedPlayer.reset();
  }

  invite() {
    if (this.selectedTeam === 0) {
      this.teamA.push(_.cloneDeep(this.selectedPlayer.value));

    } else {
      this.teamB.push(_.cloneDeep(this.selectedPlayer.value));
    }
    this.reset();
  }

  save() {
    const game = new Map<number, Array<Player>>();
    game.set(0, _.cloneDeep(this.teamA));
    game.set(1, _.cloneDeep(this.teamB));
    this.gamesService.save(1, game);
    this.router.navigate(['']);
  }

  complete() {
    // TODO: update players stats
    
  }

  shouldDisableTeam(team: Array<Player>) {
    return team.length === 4;
  }

  shouldDisableInviteButton() {
    return (this.teamA.length === 4 && this.teamB.length === 4) || this.selectedPlayer.value === null;
  }

  shouldDisableSaveButton() {
    return !this.validateTeams();
  }

  shouldDisableCompleteButton() {
    return !this.winnerTeam;
  }

  validateTeams() {
    return this.validateTeam(this.teamA) && this.validateTeam(this.teamB);
  }

  validateTeam(team: Array<Player>) {
    return team.length === 4 || team.length === 2;
  }

}
