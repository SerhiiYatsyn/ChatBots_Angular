import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  enteredMessage: string;
  @Output() outMessage = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  emitMessage() {
    console.log(this.enteredMessage);
    this.outMessage.emit(this.enteredMessage);
    this.enteredMessage = '';
  }
}
