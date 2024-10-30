import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rapport',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rapport.component.html',
  styleUrl: './rapport.component.scss'
})
export class RapportComponent implements OnInit {
  formRapport!: FormGroup
  ngOnInit(): void {
    this.formRapport = new FormGroup({
      

    })
  }

}
