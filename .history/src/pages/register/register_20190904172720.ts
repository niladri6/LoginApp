import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm =new FormGroup({
      'userData': new FormGroup({
        'username' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'name' : new FormControl(null, Validators.required),
        'phone' : new FormControl(null, [Validators.maxLength(10), Validators.minLength(10)]),
        'password' : new FormControl(null),
        'dob' : new FormControl(null)
      })
      //'gender': new FormControl('male')
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }
  user: any = {
    "username":"",
    "email":"",
    "name":"",
    "phone":"",
    "password":"",
    "dob":""
  }
  // submitted = false;
  // onSubmit() {
  //   /*console.log(this.signupForm);*/
  //   // property first: userData is a property
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.name = this.signupForm.value.userData.name;
  //   this.user.phone = this.signupForm.value.userData.phone;
  //   this.user.password = this.signupForm.value.password;
  //   this.user.gender = this.signupForm.value.gender;
  //   this.user.dob = this.signupForm.value.dob;
 
  // }


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
