
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { RegisterComponent } from './register.component';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent], // replace with your actual component class
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
    }).compileComponents();
  });

  it('Register component test', () => {
    const fixture = TestBed.createComponent(RegisterComponent); 
    const registerComponent = fixture.componentInstance;
    expect(registerComponent).toBeTruthy();
  });

  it('Form GUI elements count', () => {
    const fixture = TestBed.createComponent(RegisterComponent); 
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const buttonElement = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(6); 
    expect(buttonElement.length).toEqual(2); 
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
});
