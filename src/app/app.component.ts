import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showFiller = false;
  cards = [
    {
      title: 'Card title',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      updatedOn: '3 mins ago',
    },
    {
      title: 'Card title',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      updatedOn: '3 mins ago',
    },
  ];

  toggle() {
    this.showFiller != this.showFiller;
  }
}
