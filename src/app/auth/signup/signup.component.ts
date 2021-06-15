import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password && val.type) {
      this.authService.register(val)
        .subscribe(
          () => {
            console.log('User is registered.');
            if (val.type === 'candidate') {
              this.router.navigate(['/home']);
            } else {
              this.router.navigateByUrl('/dashboard');
            }
          }
        );
    }
  }

  ngOnInit() {
  }

}
