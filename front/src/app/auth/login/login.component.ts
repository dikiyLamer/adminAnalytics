import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  snack = false;
  snackText: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        this.show('Регистрация прошла успешно');
      } else if (params['accessDenied']) {
      } else if (params['sessionExpired']) {
        this.show('Время сессии вышло');
      }
    });
  }

  onSubmit() {
    this.loginForm.disable();
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        this.router.navigate(['/overview']);
        console.log(data);
        this.loginForm.enable();
      },
      (e) => {
        this.show(e.error.message);
        this.loginForm.enable();
      }
    );
  }

  show(data: string) {
    this.snack = !this.snack;
    this.snackText = data;
    setTimeout(() => {
      this.snack = !this.snack;
    }, 1000);
  }
}
