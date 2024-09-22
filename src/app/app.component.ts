import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demoproject';

  products: any[]=[{
    code:'1234',
    name:'Laptop',
    category:'Electronics',
    quantity:4
  }];

    constructor() { }

    ngOnInit() {
    }
}
