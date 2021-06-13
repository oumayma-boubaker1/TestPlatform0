import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css']
})
export class NewQuizComponent implements OnInit {

  form: FormGroup;
  

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      totalMarks: ['', Validators.required],
      time: ['', Validators.required],
      subject: ['', Validators.required],
      questions: this.fb.array([this.init()]),
    });
  }
  init() {
    return this.fb.group({
      mark: ['', Validators.required],
      que: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correctOption: ['', Validators.required]
    });
  }

  addQuestion() {
    const control = <FormArray>this.form.get('questions');
    control.push(this.init());
  }

  removeQuestion(i) {
    const control = <FormArray>this.form.get('questions');
    if (control.length > 1) {
      control.removeAt(i);
    }
  }

  save() {
    if (this.form.valid) {
      this.authService.createQuiz(this.form.value)
        .subscribe(
          (resp) => {
            console.log(resp);

            if (resp['success'] === true) {
              this.form.reset();
              this.router.navigateByUrl('/dashboard');
            } else {
              console.log('error');
            }
          }
        );
    }
  }

  cancel() {
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
    console.log(this.form);
  }

  

}
