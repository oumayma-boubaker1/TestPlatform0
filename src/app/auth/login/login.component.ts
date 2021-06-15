import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.authenticate(val)
        .subscribe(
          (resp) => {
            console.log(resp);
            sessionStorage.setItem('id_token', resp['token']);
            sessionStorage.setItem('user', JSON.stringify(resp['user']));
            if (resp['user']['role'] === 'candidate') {
              this.router.navigateByUrl('/home');
            } else {
              this.router.navigateByUrl('/dashboard');
            }
          }
        );
    }
  }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user.role === 'candidate') {
        this.router.navigateByUrl('/home');
      } else {
        this.router.navigateByUrl('/dashboard');
      }
    }
  }

}
