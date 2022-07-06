import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthService } from '../auth.server';

// import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent{

  isLoginMode = true;
  isLoading = false;
  error = null;


  constructor( 
    private router: Router , 
    private authSevice: AuthService
  ) { }

 onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
 }

 // onSubmit(form: HTMLFormElement) {
 //   console.log(form);
 // }

  onSubmit(form: NgForm) {
    //verifica dei campi, verifica pw uguali
     console.log(form);

     form.reset();

  }

 //   console.log(this.signupForm);

 //   this.http.post(
 //     "https://angular-demo-97-default-rtdb.firebaseio.com/users.json", 
 //     this.signupForm.value)
 //     .subscribe(
 //       (response) => {
 //         console.log(response);
 //         this.signupForm.reset();
 //         this.router.navigate(["../", "login"], {relativeTo: this.activeRoute});
 //       }
 //     );
//  }


}
