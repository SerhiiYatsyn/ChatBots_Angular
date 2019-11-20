import {Component, Input, OnInit} from '@angular/core';
import {Bot} from '../../bot';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.css']
})
export class BotListComponent implements OnInit {
  @Input() Bots: Bot[];
  constructor() { }

  ngOnInit() {
  }

}
