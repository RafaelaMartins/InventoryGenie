import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  
  //teste
  #http = inject(HttpClient);
  #url = signal (
    'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'
  );
}
