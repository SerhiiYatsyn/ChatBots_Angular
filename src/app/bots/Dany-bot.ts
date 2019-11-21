import {Bot} from '../app.component';
import {interval, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

export let botDany: Bot = {
  name: 'dany',
  messages: [{
    from: 'bot',
    message: 'Hello, i am Dany. Send me my name by downcase'
  }],
  logic() {
    if (this.messages[this.messages.length - 1].message === this.name) {
      of(this.messages[this.messages.length - 1]).pipe(
        switchMap(m =>
          interval(1000).pipe(
            map(i => 'I am the Queen 🔥 I need your love 💙')
          ))
      ).subscribe(message => this.messages.push({from: 'bot', message}));
    }
  }
};
