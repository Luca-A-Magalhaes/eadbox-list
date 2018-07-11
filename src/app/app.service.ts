import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService{

  protected url : string = '/api/courses';

  constructor(private http: HttpClient) {}

  // Rest Items Service: Read all REST Items
  getAll() {
    return this.http
      .get<any[]>(this.url, httpOptions);
    //   .pipe(map((obj, i) => ({
    //       url: "http://escola-do-luca.eadbox.com/ng/student/courses/" + obj[i].course_slug,
    //       titulo: obj[i].title,
    //       descricao: obj[i].description
    //   })));
  }

}