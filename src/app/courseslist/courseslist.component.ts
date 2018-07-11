import { Component, Input } from '@angular/core';
import { Course } from '../model/course';

// Componente responsavel pela listagem dos cursos
// list : Lista de Cursos a serem exibidos
@Component({
  selector: 'app-courses-list',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CoursesListComponent{

  constructor() { }

  @Input() list: Course[] = [];

}
