import {hasWord} from '../components/chat/chat.component';
import {Bot} from '../app.component';


export let botAndy: Bot = {
  name: 'andy',
  messages: [{
    from: 'bot',
    message: 'Hello, i am andy',
  }],
  logic() {
    console.log('in');
    if (hasWord(this.messages[this.messages.length - 1], 'andy')) {
      this.messages.push({from: 'bot', message: 'i hear you'});
    } else {
      this.messages.push({from: 'bot', message: 'i don`t understand you!'});
    }
  }
};
