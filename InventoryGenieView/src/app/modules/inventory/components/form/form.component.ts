import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatButtonModule, CommonModule, ReactiveFormsModule,  MatDividerModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  
  public registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  
  // ToDo: OLHAR COMO FAZENVIO DE DADOS PARA BACK
  // public register() {
  //   this.registerForm.
  // }
}

