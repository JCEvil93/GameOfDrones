import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Player } from './../Common/Models/Players'

@Component({
  selector: 'match-screen',
  templateUrl: './match-screen.component.html',
  styleUrls: ['./match-screen.component.scss']
})
export class MatchScreenComponent implements OnInit {
  @Input()
  players: any[];

  ngOnInit() {
    console.log(this.players);
  }
}