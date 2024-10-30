import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-teachers',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-teachers.component.html',
  styleUrl: './edit-teachers.component.scss'
})
export class EditTeachersComponent implements OnInit {
  formEditTeacher!: FormGroup
    ngOnInit(): void {
      this.formEditTeacher = new FormGroup({
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        gender: new FormControl(''),
        matricule: new FormControl(''),
        date: new FormControl(''),
        matiere: new FormControl(''),
        telephone: new FormControl(''),
        city: new FormControl(''),
      })
  }
  IsInvalidInput(control: AbstractControl){
    return control.invalid && (control.touched) || (control.dirty)

  }

}
