import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  private lastTimeBackPress = 0;
  private timePeriodToExit = 2000;

  constructor(private router: Router, private platform: Platform,
    private toastController: ToastController) {
    this.sideMenu();
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      document.addEventListener('deviceready', () => {
        this.handleBackButton();
      }, false);
    });
  }

  handleBackButton() {
    document.addEventListener('backbutton', async () => {
      const now = new Date().getTime();
      if (now - this.lastTimeBackPress < this.timePeriodToExit) {
        (navigator as any).app.exitApp(); // Close the app with type assertion
      } else {
        const toast = await this.toastController.create({
          message: 'Press back again to exit',
          duration: 2000,
          position: 'bottom'
        });
        toast.present();
        this.lastTimeBackPress = now;
      }
    }, false);
  }


  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/dashboard",
          icon: "home"
        },
        {
          title: "Agents",
          url: "/agentlist",
          icon: "people"
        },
        {
          title: "Service Level",
          url: "/servicelevel",
          icon: "pie-chart"
        },
        {
          title: "Daily Stats",
          url: "/dailystats",
          icon: "stats-chart"
        },
        {
          title: "Logout",
          url: "/login",
          icon: "log-out"
        }
        // {
        //   title: "My Profile",
        //   url: "/myprofile",
        //   icon: "people"
        // },

      ]
  }
}
