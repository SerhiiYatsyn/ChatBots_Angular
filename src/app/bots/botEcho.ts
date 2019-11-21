import {Bot, Message} from '../app.component';
import {interval, of} from 'rxjs';
import {delay, map, switchMap} from 'rxjs/operators';

export let botEcho: Bot = {
  name: 'echo',
  messages: [{
    from: 'bot',
    message: 'Repeats your message after 1 second delay.'
  }],
  logic() {
    of(this.messages[this.messages.length - 1]).pipe(
      delay(1000)).subscribe((message: Message) => this.messages.push({from: 'bot', message: message.message}));
  }
};
