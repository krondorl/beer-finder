import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  loginError = false;
  userLoggedin = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required]
    });

    this.authenticationService.currentUser.subscribe({
      next: (username) => {
        if (username != null && username.length > 0) {
          this.userLoggedin = true;
        }
      }
    });
  }

  onSubmit() {
    const userName = this.loginForm.controls.username.value;
    this.loginError = false;
    this.loading = true;
    this.authenticationService.callLogin().subscribe({
      next: (loginResponse) => {
        if (loginResponse.answer === 'yes') {
          localStorage.setItem('currentUser', JSON.stringify(userName));
          this.authenticationService.currentUserSubject.next(userName);
          this.router.navigate(['/listing']);
        } else {
          this.loginError = true;
        }
      },
      error: (err) => {
        this.loginError = true;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
