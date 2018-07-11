import { Component, Input } from '@angular/core';
import { Course } from '../model/course';

// Componente responsavel por exibir as informações do Curso
// selected : flag para verificar se o curso foi expandido
// course : Curso a ser exibido
@Component({
  selector: 'app-course-item',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  selected: boolean = false;

  constructor() { }

  @Input() course: Course;

  // Funcao para alternar a expansão dos dados do curso
  OnClick(): void{
    this.selected = !this.selected;
  }

}
