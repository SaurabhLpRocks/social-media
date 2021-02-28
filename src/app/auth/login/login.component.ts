import { appConstants } from '@shared/constants/app.constant';
import { AuthService } from './../auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class LoginComponent implements OnInit {
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginErrorMessage: string;
  returnUrl: string;

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  // #region Constructors (1)

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  // #endregion Constructors (1)

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin(): void {
    const { username, password } = this.loginForm.value;
    this.authService.loginUser(username, password).subscribe(
      (user) => {
        console.log('login success', user);
        this.loginErrorMessage = '';
        this.router.navigate([this.returnUrl]);
      },
      (err) => {
        this.loginErrorMessage =
          err?.error?.message ?? appConstants.unknownLoginErrorMsg;
        console.error('login error', err);
      }
    );
  }
}
