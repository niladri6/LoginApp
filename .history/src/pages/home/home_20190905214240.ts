import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { RecoveryPage } from "../recovery/recovery";

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
  @ViewChild('nav') recover: NavController;
  goRec(){
    this.recover.push(RecoveryPage);
  }
}
