import {Bot, Message} from '../app.component';
import {from, interval, Observable, of} from 'rxjs';
import {delay, map, switchMap, zip} from 'rxjs/operators';
import {hodorYell} from './hodor-yell';

export let botHodor: Bot = {
  name: 'hodor',
  messages: [{
    from: 'bot',
    message: 'Open the doors'
  }],
  logic() {
    of(this.messages[this.messages.length - 1]).pipe(
      switchMap(holdTheDoor)).subscribe((message) => this.messages.push({from: 'bot', message}));
  }
};

function holdTheDoor(): Observable<string> {
  return from(hodorYell).pipe(
    zip(interval(2000)),
    map<Array<any>, string>(z => z[0])
  );
}
