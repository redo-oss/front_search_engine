import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MessageService]
})
export class AppComponent {
  title = 'angular-devoir';
  uploadedFiles: any[] = [];
  multiple:boolean=  true;

  constructor() {}

}
