import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topic: string = 'recipes';

  switchTopic(topic: string) {
    this.topic = topic;
  }
}
