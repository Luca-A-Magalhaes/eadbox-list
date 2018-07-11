import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;
  listCourses: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): void{
    this.appService.getAll().subscribe(restItems => {
      this.listCourses = restItems.map(obj => ({
        id: obj.course_id,
        url: "http://escola-do-luca.eadbox.com/ng/student/courses/" + obj.course_slug,
        titulo: obj.title,
        descricao: obj.description,
        aulas: obj.lectures.length,
        logo: obj.logo_url
      }));
      this.loading = false;
    })
  }

  OnUpdate(): void{
    this.loading = true;
    this.getRestItems();
  }
}
