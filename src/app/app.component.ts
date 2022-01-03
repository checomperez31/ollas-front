import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ollas-front';
  isOpen = false;

  toggleSideBar(): void {
    this.isOpen = !this.isOpen;
  }
}
