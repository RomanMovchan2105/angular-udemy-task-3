import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen = false;

  changes: any[] = [];


  toggle(){
    this.isOpen = !this.isOpen;
    this.changes.push({time: new Date(), isOpen: this.isOpen});
  }
}
