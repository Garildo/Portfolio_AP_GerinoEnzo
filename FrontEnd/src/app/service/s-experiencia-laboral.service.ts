import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaLaboral } from '../model/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaLaboralService {

  
  URL = 'https://backendportfolio-ap-gerinoenzo.onrender.com/explab/';
  //URL = 'http://localhost:4200/explab/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaLaboral> {
    return this.httpClient.get<ExperienciaLaboral>(this.URL + `detail/${id}`); //comillas a las izquierda (tecla "}")//
  } 

  public save(experiencia: ExperienciaLaboral): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: ExperienciaLaboral): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
