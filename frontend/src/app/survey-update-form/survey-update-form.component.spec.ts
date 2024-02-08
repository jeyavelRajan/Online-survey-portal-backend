import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyUpdateFormComponent } from './survey-update-form.component';

describe('SurveyUpdateFormComponent', () => {
  let component: SurveyUpdateFormComponent;
  let fixture: ComponentFixture<SurveyUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyUpdateFormComponent]
    });
    fixture = TestBed.createComponent(SurveyUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
