import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Alert } from 'ionic-angular';

/**
 * Generated class for the RecoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class RecoveryPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
 
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Email Sent',
      subTitle: 'Please check your enail',
      buttons: ['Done']
    });
    alert.present();
  }
  
  }

}
