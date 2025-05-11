import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ILoginRequest } from '../../../models/auth/i-login-request';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  router = inject(Router);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formValue: ILoginRequest = this.loginForm.value;
      this.authService.login(formValue).subscribe({
        next: (response) => {
          this.toastr.success('Login successful', 'Success');
          this.loginForm.reset();
          this.router.navigate(['/attractions']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
    }
  }

  goBack() {
    this.router.navigate(['/options']);
  }
}
