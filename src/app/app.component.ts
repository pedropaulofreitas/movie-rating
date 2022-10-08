import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div id="root"><router-outlet></router-outlet></div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-chat-web-app';
}
