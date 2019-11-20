import {Observable, from, interval, pipe} from 'rxjs';
import {switchMap, zip, map, scan} from 'rxjs/operators';

import {registry, Bot, Reply} from '../bot';

export const ADD_BOT: Bot = {
  name: 'add',
  description: 'Sums up the entered numbers.',
};

registry.addBot(ADD_BOT, pipe(
  map((str: string) => str.split(' ')[1]),
  scan((acc: number[], val: any) => acc.push(val), []),
  map((num) => num + '  ')
  )
);
