import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Teste } from './teste';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  apiUrl = 'http://localhost:8080' // adicionar a correta
  private headers = { "Content-Type": "application/json" };

  constructor(private http: HttpClient) { }

  // alterar o nome (retornaCnpj)
  retornaCnpj() {
    // aqui entra o método
  }

}
