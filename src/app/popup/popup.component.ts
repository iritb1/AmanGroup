import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Joke, TwoPart } from '../joke-table/types/joke';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {joke: any , threeRandomJokes: any}) { }

  ngOnInit(): void {
    console.log(this.data)

  }

  closeDialog(){
    this.dialogRef.close();
  }

}
