import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  data: any; // Variável para armazenar os dados da requisição

  constructor(private http: HttpClient) {} // Injeção do HttpClient

  fazerRequisicao() {
    this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
      .subscribe((response) => {
        this.data = response; // Armazena os dados da resposta na variável data
        console.log(response)
      }, (error) => {
        console.error('Erro:', error); // Trata erros
      });
  
  }

}

