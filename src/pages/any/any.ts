import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the project iAuth.
 *
 * See https://github.com/Edwik/iAuth-IONIC-3-2017 for more info on
 * Ionic iAuth by Edwin Anaya.
 */

@Component({
  selector: 'page-any',
  templateUrl: 'any.html',
})
export class AnyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnyPage');
  }

}
