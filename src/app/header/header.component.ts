import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public images: string[];
  constructor() {
    this.images=[];
  }

  ngOnInit(): void {
    this.images = [
      'assets/images/slider1.png',
      'assets/images/slider2.png',
      'assets/images/slider3.png',
      'assets/images/slider4.jpg',
    ]
  }

}
