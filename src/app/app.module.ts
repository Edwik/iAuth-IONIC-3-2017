import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

//storage
import { IonicStorageModule } from '@ionic/storage';

//pages
import 
{ 
  //auth
  LoginPage,
  RegisterPage,
  ForgotPage,
  ForgotCodePage,
  ReleasePage,
  //my pages
  AnyPage,
  HomePage

} from '../pages/index';

//providers
import 
{ 
  //auth
  LoginProvider,
  RegisterProvider,
  ForgotProvider,
  ReleaseProvider,
  //common
  ErrProvider,
  InternetProvider,
  PushProvider,
  StorageProvider
  //my Providers

} from '../providers/index';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReleasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReleasePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    PushProvider,
    LoginProvider,
    RegisterProvider,
    ForgotProvider,
    ReleaseProvider,
    ErrProvider,
    InternetProvider
  ]
})
export class AppModule {}
