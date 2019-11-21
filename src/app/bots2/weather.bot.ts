// import { registry, Bot } from '../components/bot/bot.component';
// import { currentWeather, WeatherConditions } from './weather.service';
// import { pipe } from 'rxjs';
// import { map, mergeMap } from 'rxjs/operators';
//
// export const WEATHER_BOT: Bot = {
//   name: 'weather',
//   messages: ['Responds with current weather in Cherkasy.']
// };
//
// registry.addBot(WEATHER_BOT, pipe(
//   mergeMap(currentWeather),
//   map<WeatherConditions, string>(w => `${w.temp}C, ${w.humidity}%, ${w.description}`)
// ));
