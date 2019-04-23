import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialogue-picker',
  templateUrl: './dialogue-picker.component.html',
  styleUrls: ['./dialogue-picker.component.css']
})
export class DialoguePickerComponent implements OnInit {

   title: string;
  constructor(
    private dialogRef: MatDialogRef<DialoguePickerComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.title = data.titre;
  }

  ngOnInit() {
  }

}
