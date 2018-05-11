import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

//***********  ionic-native **************/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
/*import { TabsPage } from '../pages/components/tab';*/

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;
  public rootPage;
  //rootPage: string = 'IntroPage';
  menu:Array<any> = [];
  pages: Array<any>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp(storage);
    this.menu = [
        {
          title: 'Home',
          iconLeft: 'home',
          showDetails: true,
          items:  [

              /*{name:'Authentication(Login)',component:'LoginPage'},*/
              {name:'Authentication(Register)',component:'RegisterPage'},
              {name:'Authentication(Forgot)',component:'ForgotPage'},
              {name:'Authentication(Profile)',component:'AfterLoginPage'},
              {name:'My farm',component: 'MapPage'},

          ]
        }, {
          title: 'Profile',
          iconLeft: 'contact',
          showDetails: true,
          items:  [

            ]
        },{
          title: 'About',
          iconLeft: 'information-circle',
          showDetails: false
    /*      items:  [
            {
            name:'Color',
            component:'ThemePage'
            }
          ]*/
        }
    ];

    this.pages = [
      { icon:'home', title:'Home', component: 'AfterLoginPage' },
      { icon:'call', title:'My farm', component: 'InputPage' },
      { icon:'call', title:'Reports', component: 'InputPage' },
      { icon:'bookmark', title:'Sagarobotics AS - alpha', component: '' }
    ];

  }

  initializeApp(storage: Storage) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('login:status').then(loggedIn => {
          console.log('Is Logged in : ', loggedIn);
          this.rootPage = loggedIn ? 'AfterLoginPage': 'LoginPage';
        });
    });
  }
  toggleDetails(menu) {
    if (menu.showDetails) {
        menu.showDetails = false;
        menu.icon = 'ios-add-outline';
    } else {
        menu.showDetails = true;
        menu.icon = 'ios-remove-outline';
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // page.component = item array.component -->
    //this.nav.setRoot(page.component);
    this.nav.setRoot(page.component).catch(err => console.error(err));
  }

}
