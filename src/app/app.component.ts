import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  restItems: any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): void{
    this.appService.getAll().subscribe(restItems => {
      this.restItems = restItems;
      console.log(this.restItems);
    })
  }
}
