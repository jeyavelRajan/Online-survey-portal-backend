// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http'; 
// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent; // replace with your actual component class
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent], // replace with your actual component class
//       imports: [
//         BrowserAnimationsModule,
//         MatCardModule,
//         MatToolbarModule,
//         MatFormFieldModule,
//         MatInputModule,
//         ReactiveFormsModule,
//         HttpClientModule
//       ],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent); 
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a form with the required form controls', () => {
//     const form = component.myForm;
//     expect(form.contains('userName')).toBeTruthy();
//     expect(form.contains('password')).toBeTruthy();
//   });

//   it('should have required validators for form controls', () => {
//     const userNameControl = component.myForm.get('userName');
//     expect(userNameControl?.hasError('required')).toBeTruthy();

    
//   });


//   it('should enable the login button when the form is valid', () => {
//     const loginButton = fixture.nativeElement.querySelector('.loginButton');
//     component.myForm.valid;
//     fixture.detectChanges();
//     expect(loginButton.disabled).toBeFalsy();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'




import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';


describe('Login Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
        MatCardModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  });




  it('login Component Test', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });


  it(`should have as title 'Login Form Component'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login');
  });




  it('Login Form Input GUI count', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(2);
  });


  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });




  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    const loginFormGroup = login.myForm;
    const loginFormValues = {
      userName: '',
      password: '',
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });




  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    login.myForm.controls?.['userName'].setValue("venoms");
    login.myForm.controls?.['password'].setValue("1000");
    expect(login.myForm.valid).toBeTruthy();
  });
});



