import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: any;
  password: any;

  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log("username: "+ this.username);
    console.log("password: "+ this.password);
  }

}
