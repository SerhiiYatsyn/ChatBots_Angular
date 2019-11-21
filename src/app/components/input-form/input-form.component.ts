import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {sentMessage$} from '../../chat';
import {merge, Observable, Subject} from 'rxjs';
import {scan} from 'rxjs/operators';
import {Message} from '../../app.component';

// export class Message {
//   constructor(public author: string, public text: string) {
//   }
//
//   print(): string {
//     return `${this.author}: ${this.text}`;
//   }
// }
//
// const sentMessage$: Subject<Message> = new Subject();
// export const incommingMessage$: Subject<Message> = new Subject();
//
// export const newMessage$ = merge<Message>(sentMessage$, incommingMessage$);
//
// export const messages$: Observable<Message[]> = newMessage$.pipe(
//   scan((messages, m: Message) => [...messages, m], [])
// );
//
// export function send(message: string) {
//   console.log(message)
//   sentMessage$.next(new Message('user', message));
//   console.log(sentMessage$);
// }

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  enteredMessage: string;
  @Output() outMessage = new EventEmitter<Message>();

  constructor() {
  }

  ngOnInit() {
  }

  emitMessage() {
    console.log(this.enteredMessage);

    this.outMessage.emit({from: 'user', message: this.enteredMessage});
    this.enteredMessage = '';
    // send(this.enteredMessage);
  }
}
