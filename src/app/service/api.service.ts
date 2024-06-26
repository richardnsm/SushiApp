import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBox(): Observable<any> {
    return this.http.get('https://ldv-sushi-api.azurewebsites.net/api/boxes')
  }

  getImages(): Observable<any>{
    return this.http.get('https://ldv-sushi-api.azurewebsites.net/api/image')
  }
}
