import {Component} from '@angular/core';

interface Bot {
  name: string;
  messages: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  bots: Bot[] = [{
    name: 'andy',
    messages: []
  }];
  activeBot: Bot = this.bots[0];

  // enteredMessage: string;

  getEnteredMessage(message: string) {
    // const bot = this.bots.find(b => b.name === this.activeBotName);
    // bot.messages.push(message);
    this.activeBot.messages.push(message);
  }

}
