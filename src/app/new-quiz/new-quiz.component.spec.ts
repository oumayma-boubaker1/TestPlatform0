import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizComponent } from './new-quiz.component';

describe('NewQuizComponent', () => {
  let component: NewQuizComponent;
  let fixture: ComponentFixture<NewQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
