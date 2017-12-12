import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

//for storage
import { Storage } from '@ionic/storage';

/**
 * Generated class for the project iAuth.
 *
 * See https://github.com/Edwik/iAuth-IONIC-3-2017 for more info on
 * Ionic iAuth by Edwin Anaya.
 */
@Injectable()
export class StorageProvider {

  id_user;
  token;

  constructor( private platform:Platform, private storage:Storage) {
    console.log('Hello StorageProvider Provider');
  }

  public save(id_user, token){
    
    console.log("hello save storage");

    if( this.platform.is("cordova") ){
      this.storage.set('id_user', id_user);
      this.storage.set('token', token);
    }else{
      if( this.token ){
        localStorage.setItem("id_user", id_user);
        localStorage.setItem("token", token);
      }else{
        localStorage.removeItem("id_user");
        localStorage.removeItem("token");
      }
    }
  }

  public load(){
    
    console.log("hello load storage");

    let promesa = new Promise( ( resolve, reject )=>{

      if( this.platform.is("cordova") ){

        this.storage.ready().then( ()=>{
        
          this.storage.get("id_user").then( (id_user)=>{
            if( id_user ){
              this.id_user = id_user;
            }
          })
          this.storage.get("token").then( (token)=>{
            if( token ){
              this.token = token;
            }
            resolve();
          })

        })

      }else{

        if( localStorage.getItem("token") ){

          this.token = localStorage.getItem("token");
          this.id_user = localStorage.getItem("id_user");

        }
        resolve();
      }

    });
    return promesa;
  }
}
