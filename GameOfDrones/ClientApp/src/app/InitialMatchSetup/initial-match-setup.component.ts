import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Player } from './../Common/Models/Players'

@Component({
  selector: 'initial-match-setup',
  templateUrl: './initial-match-setup.component.html',
  styleUrls: ['./initial-match-setup.component.scss']
})
export class InitialMatchSetupComponent {

  @Output()
  players = new EventEmitter < Player[]>();

  constructor(private fb: FormBuilder) { }

  playersForm = this.fb.group({
    player1: ['', Validators.required],
    player2: ['', Validators.required]
  })

  sendPlayers() {
    let people = new Array()
    people.push(new Player(1, this.playersForm.get('player1').value));
    people.push(new Player(2, this.playersForm.get('player2').value));

    this.players.emit(people);
  }
}