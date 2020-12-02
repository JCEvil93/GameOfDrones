import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../Modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '80%',
      height:'80%',
      data: {}
    })
  }
}
