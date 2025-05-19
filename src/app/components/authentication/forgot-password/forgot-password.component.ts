import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  emailForm!: FormGroup;
  otpForm!: FormGroup;
  resetForm!: FormGroup;
  step: 'email' | 'verify' | 'reset' | 'success' = 'email';
  email = '';
  showNewPassword: boolean = false;
  sendOtpButton: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required]],
    });
    this.resetForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  sendOtp() {
    if (this.emailForm.invalid) return;
    this.sendOtpButton = false;
    this.email = this.emailForm.value.email!;
    this.authService.sendOtp(this.email).subscribe({
      next: () => {
        this.toastr.success('OTP sent to your email', 'Success');
        this.step = 'verify';
        this.otpForm.reset();
      },
      complete: () => {
        this.sendOtpButton = true;
      },
    });
  }

  verifyOtp() {
    if (this.otpForm.invalid) return;
    this.authService.verifyOtp(this.email, this.otpForm.value.otp!).subscribe({
      next: () => {
        this.toastr.success('OTP verified', 'Success');
        this.step = 'reset';
        this.resetForm.reset();
      },
    });
  }

  resetPassword() {
    if (this.resetForm.invalid) return;
    this.authService
      .resetPassword(
        this.email,
        this.otpForm.value.otp!,
        this.resetForm.value.newPassword!
      )
      .subscribe({
        next: () => {
          this.toastr.success('Password reset successfully', 'Success');
          this.step = 'success';
        },
      });
  }
  goBack() {
    this.emailForm.reset();
    this.otpForm.reset();
    this.resetForm.reset();
    this.router.navigate(['/login']);
  }
}
