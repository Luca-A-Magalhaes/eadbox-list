import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Servico para fazer a comunicacao com a API REST
@Injectable()
export class AppService{

  // Ponto de acesso de listagem dos cursos
  protected courses : string = '/api/courses';

  constructor(private http: HttpClient) {}

  // Lista todos os cursos
  getAll() {
    return this.http.get<any[]>(this.courses);
  }

}