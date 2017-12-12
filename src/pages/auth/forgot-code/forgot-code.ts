import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the project iAuth.
 *
 * See https://github.com/Edwik/iAuth-IONIC-3-2017 for more info on
 * Ionic iAuth by Edwin Anaya.
 */

@Component({
  selector: 'page-forgot-code',
  templateUrl: 'forgot-code.html',
})
export class ForgotCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotCodePage');
  }

}
