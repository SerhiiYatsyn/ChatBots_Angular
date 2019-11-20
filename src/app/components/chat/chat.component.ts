import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // messages: string[] = [];
  // message: string;
  @Input() messages: string[];

  constructor() {
  }

  ngOnInit() {
  }
}
