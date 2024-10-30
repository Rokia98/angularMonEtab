import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-students',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ], 
  templateUrl: './update-students.component.html',
  styleUrl: './update-students.component.scss'
})
export class UpdateStudentsComponent {
  formUpdateStudent!: FormGroup
  ngOnInit(): void {
    this.formUpdateStudent = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      matricule: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      classe: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),

    });

  }
  IsInvalidInput(control: AbstractControl){
    return control.invalid && (control.touched) || (control.dirty)

  }
}


