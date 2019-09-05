import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { RegisterPage } from "../register/register";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  username: any;
  password: any;

  constructor(public navCtrl: NavController) {}

  login() {
    console.log("username: " + this.username);
    console.log("password: " + this.password);
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

  onRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
