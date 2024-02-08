import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSurveyComponent } from './insert-survey.component';

describe('InsertSurveyComponent', () => {
  let component: InsertSurveyComponent;
  let fixture: ComponentFixture<InsertSurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertSurveyComponent]
    });
    fixture = TestBed.createComponent(InsertSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
