import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {Bot} from '../bot/bot.component';
import {OperatorFunction} from 'rxjs';
// import {incommingMessage$, Message, sentMessage$} from '../chat/chat.component';
import {filter, map} from 'rxjs/operators';
import {Bot} from '../../app.component';
// import {bots2} from '../bot/bot.component';

// export interface Reply extends OperatorFunction<string, string> {
// }

// export interface RegistryUI {
//   header: (text: string) => void;
//   describe: (bot: Bot) => void;
// }

// export const registry = {
//   addBot(bot: Bot, reply: Reply) {
//     bots2.push(bot);
//     subscribeBot(bot, reply);
//   },
//   bots2(): Bot[] {
//     return [...bots2];
//   },
//   explore(ui: RegistryUI) {
//     ui.header('Mention bot name in message to trigger it.');
//     bots2.forEach(b => ui.describe(b));
//   }
// };

// function subscribeBot(bot: Bot, reply: Reply) {
//   sentMessage$.pipe(
//     filter(mention(bot.name)),
//     map(m => m.text),
//     reply,
//     map(m => new Message(bot.name, m))
//   ).subscribe(m => incommingMessage$.next(m));
// }
//
// export function hasWord(word: string): (message: string) => boolean {
//   return (m: string) => {
//     return testForWord(m, word);
//   };
// }
//
// export function mention(name: string): (m: Message) => boolean {
//   const token = '@' + name;
//   return (m: Message) => {
//     return testForWord(m.text, token);
//   };
// }
//
// function testForWord(message: string, word: string) {
//   return message.split(/\s+/).indexOf(word) > -1;
// }


@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.css']
})

export class BotListComponent implements OnInit {

  @Input() Bots: Bot[];
  @Input() currentBot;
  @Output() outBot = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getBot($event: MouseEvent) {
    const botName: string = ($event.target as HTMLElement).innerText;
    this.currentBot = this.Bots.find(bot => bot.name === botName);
    this.outBot.emit(this.currentBot);
  }
}
