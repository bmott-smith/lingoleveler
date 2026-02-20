import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  health() {
    return this.http.get('http://localhost:8080/actuator/health', { responseType: 'text' });
  }
}
