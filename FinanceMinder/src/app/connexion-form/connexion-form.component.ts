import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './connexion-form.component.html',
  styleUrl: './connexion-form.component.scss'
})
export class ConnexionFormComponent {
  form: FormGroup;

  constructor(private router: Router){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
}

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value || '';
      const password = this.form.get('password')?.value || '';

      if (email === 'test@example.com' && password === 'password') {
        this.router.navigate(['/']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
