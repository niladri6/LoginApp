import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('f') signupForm: NgForm;
  genders = ['male', 'female'];

  user: any = {
    "username":"",
    "email":"",
    "name":"",
    "gender":"",
    "phone":"",
    "password":""
  }

  submitted = false;

  onSubmit() {
    /*console.log(this.signupForm);*/
    // property first: userData is a property
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.name = this.signupForm.value.userData.name;
    this.user.phone = this.signupForm.value.userData.phone;
    this.user.password = this.signupForm.value.password;
    this.user.gender = this.signupForm.value.gender;
 
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthProvider) {
  }
  onSignUp() {
    this.authService.signUp(this.user)
      .subscribe(
        data => {
          console.log('signUp success : ', data);
        },
        (error) => {
          console.log('signUp error : ', error)
        });
  }

  // onLogIn() {
  //   this.authService.logIn()
  //     .subscribe(
  //       data => {
  //         console.log('login success : ', data);
  //       },
  //       (error) => {
  //         console.log('login error : ', error)
  //       });
  // }
}
