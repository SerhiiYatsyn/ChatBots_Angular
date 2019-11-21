import {from} from 'rxjs';
import {filter, map, reduce, tap} from 'rxjs/operators';
import {Bot, Message} from '../app.component';

export let botAdder: Bot = {
  name: 'adder',
  messages: [{
    from: 'bot',
    message: 'Hello, i am adder. Write "add {number} to sums numbers. "clear" - clear messages"'
  }],
  logic() {
    const lastMessage = this.messages[this.messages.length - 1].message;
    if (lastMessage === 'clear') {
      this.messages = this.messages.slice(0, 1);
      return;
    } else if (lastMessage !== 'add') {
      this.messages.push({from: 'bot', message: 'i don`t understand you!'});
      return;
    }
    let message = '0 + ';

    from(this.messages).pipe(
      filter((allInfoMessage: Message) => allInfoMessage.from !== 'bot'),
      map((allInfoMessage: Message) => allInfoMessage.message),
      filter(((m: string) => m.split(' ')[0] === 'add')),
      filter(((m: string) => Number.isInteger(Number(m.split(' ')[1])))),
      map(m => Number.parseInt(m.split(' ')[1])),
      tap((n: number) => message += n + ' + '),
      reduce((acc, v) => acc + v, 0))
      .subscribe(sum => {
        message = message.substring(0, message.length - 2) + ' = ' + sum;
        this.messages.push({from: 'bot', message});
      });
    console.log(this.messages[this.messages.length - 1]);

  }
};
