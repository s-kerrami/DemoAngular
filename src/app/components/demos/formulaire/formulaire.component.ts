import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {
  formulaire : FormGroup

  constructor(private formBuilder : FormBuilder) {
    this.formulaire = this.formBuilder.group({
      nom : ['', [Validators.required]],
      age : ['', [Validators.required], [Validators.min(0)]],
      email : ['', [Validators.required, Validators.email]],
      genre : ['', [Validators.required]],
      hobbies : this.formBuilder.array([this.formBuilder.control('', [Validators.required])]),
      pays : ['', [Validators.required]]
    })
  }
  onSubmit() {
    // Add your form submission logic here
    console.log(this.formulaire.value);
  }
}
