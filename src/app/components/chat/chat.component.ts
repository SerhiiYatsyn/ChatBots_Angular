import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {merge, Observable, Subject} from 'rxjs';
import {scan} from 'rxjs/operators';
import {Message} from '../../app.component';
import {Route, Router} from '@angular/router';

// export class Message {
//   constructor(public author: string, public text: string) {
//   }
//
//   print(): string {
//     return `${this.author}: ${this.text}`;
//   }
// }
//
// export const sentMessage$: Subject<Message> = new Subject();
// export const incommingMessage$: Subject<Message> = new Subject();
//
// export const newMessage$ = merge<Message>(sentMessage$, incommingMessage$);
//
// export const messages$: Observable<Message[]> = newMessage$.pipe(
//   scan((messages, m: Message) => [...messages, m], [])
// );
//
// export function send(message: string) {
//   sentMessage$.next(new Message('user', message));
// }

export function hasWord(message: Message, word: string)/*: (message: string) => boolean*/ {
    return message.message.split(/\s+/).indexOf(word) > -1;

}

function testForWord(message: string, word: string) {
  return message.split(/\s+/).indexOf(word) > -1;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // messages: string[] = [];
  // message: string;
  @Input() messages: Message[];



  ngOnInit() {
  }
}
