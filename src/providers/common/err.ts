import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Generated class for the project iAuth.
 *
 * See https://github.com/Edwik/iAuth-IONIC-3-2017 for more info on
 * Ionic iAuth by Edwin Anaya.
 */
@Injectable()
export class ErrProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ErrProvider Provider');
  }

}
