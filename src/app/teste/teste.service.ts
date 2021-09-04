import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  private API = `${environment.API}teste`
  // private headers = { "Content-Type": "application/json" };

  constructor(private http: HttpClient) { }

  retornaCnpj() {
    return this.http.get(this.API);
  }



}
