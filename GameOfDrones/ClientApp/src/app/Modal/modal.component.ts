import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {

  players: any[];
  isMatchStarted: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>
  ) { }

  onAbortClick(){
    this.dialogRef.close();
  }

  onStart(event: Event) {
    this.players = event;
    this.isMatchStarted = true;
  }

  ngOnDestroy() {
    this.players = null;
    this.isMatchStarted = null;
  }
}