import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activeTab:string = 'chats'
  constructor() {}

  segmentChanged(e){
    this.activeTab = e.target.value;
  }
}
