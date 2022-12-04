import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'new-rentals-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<MessageModalComponent>,
  ) {}

  ngOnInit(): void {}
}
