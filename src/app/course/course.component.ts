import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  selected: boolean = false;

  constructor() { }

  @Input() course: Course;

  ngOnInit() {
  }

  OnClick(): void{
    this.selected = !this.selected;
  }

}
