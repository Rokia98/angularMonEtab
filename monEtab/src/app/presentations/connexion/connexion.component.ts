import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})

export class ConnexionComponent implements OnInit{
  formConnexion!: FormGroup
  ngOnInit(): void {
    this.formConnexion! = new FormGroup({
      username: new FormControl('' ,Validators.required),
      password: new FormControl('',Validators.minLength(8)),
    })
    
  }
  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty)
  }

  saveData() {}
}