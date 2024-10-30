import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-teacher',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.scss'
})
export class UpdateTeacherComponent implements OnInit{
  formUpdateTeacher!: FormGroup
  ngOnInit(): void {
    this.formUpdateTeacher = new FormGroup({
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
