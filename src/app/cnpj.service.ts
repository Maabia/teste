import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_PATH } from 'src/environments/environment';

import { Cnpj } from './cnpj';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  //API = `${environment.API}teste`; // adicionar a correta
  //private headers = { "Content-Type": "application/json" };
  constructor(private http: HttpClient) { }


  getCnpj() {
   return this.http.get<Cnpj>(`${API_PATH}teste`).toPromise();
  }

}
