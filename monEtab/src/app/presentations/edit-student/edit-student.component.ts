import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent implements OnInit{
  formEditStudent!: FormGroup
  ngOnInit(): void {
    this.formEditStudent = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      gender: new FormControl(''),
      matricule: new FormControl(''),
      date: new FormControl(''),
      classe: new FormControl(''),
      telephone: new FormControl(''),
      city: new FormControl(''),

    });

  }
  IsInvalidInput(control: AbstractControl){
    return control.invalid && (control.touched) || (control.dirty)

  }
}
