import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      destino: ['', Validators.required],
      tipoViaje: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Gracias por contactarnos');
      this.contactForm.reset();
    }
  }
}
