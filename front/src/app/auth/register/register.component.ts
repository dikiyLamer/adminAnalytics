import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitSubscription!: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    this.registerForm.disable();
    this.submitSubscription = this.authService
      .register(this.registerForm.value)
      .subscribe((data) => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true,
          },
        });
      });
  }

  onDestroy() {
    if (this.submitSubscription) {
      this.submitSubscription.unsubscribe();
    }
  }
}
