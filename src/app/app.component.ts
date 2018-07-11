import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

// Componente raiz do projeto
// loading : flag para quando o sistema esta buscando novos cursos
// listCourses : array com os cursos encontrados
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  listCourses: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Funcao para fazer a listagem dos cursos atraves da API REST
  getRestItems(): void{
    this.loading = true;
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

  // Funcao para atualizar a listagem dos cursos
  OnUpdate(): void{
    this.getRestItems();
  }
}
