import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  @Input() list: Course[] = [];

  ngOnInit() {
  }

}
