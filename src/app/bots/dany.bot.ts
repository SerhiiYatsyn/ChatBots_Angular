import {Observable, from, interval, pipe} from 'rxjs';
import {switchMap, zip, map, scan, delay} from 'rxjs/operators';

import {registry, Bot, Reply} from '../bot';

export const DANY_BOT: Bot = {
  name: 'deny',
  description: 'Sums up the entered numbers.',
};

registry.addBot(DANY_BOT, pipe(
  switchMap(n =>
    interval(1000).pipe(
      map(i => 'I am the Queen 🔥\nI need your love💙')
    )
  )
));

