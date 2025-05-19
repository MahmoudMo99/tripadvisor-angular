import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

declare const google: any;

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '894312816013-u79dem03n3l7rv0odim5d3kh6hsccudr.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this),
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      shape: 'pill',
    });
  }

  handleCredentialResponse(response: any) {
    const token = response.credential;

    this.authService.googleLogin(token).subscribe({
      next: () => {
        this.toastr.success('Login successful', 'Success');
        this.router.navigate(['/Home']);
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
