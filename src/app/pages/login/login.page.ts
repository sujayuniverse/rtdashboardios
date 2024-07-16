import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from 'src/app/rest-api.service';
import { SetbaseurlService } from 'src/app/setbaseurl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Username: string = "";
  Password: string = "";
  Site_url: string = "";
  ReturnString: any = ""

  constructor(private router: Router,
    public loadingController: LoadingController,
    private toastController: ToastController,
    private ngZone: NgZone,
    private http: HttpClient,
    private baseurl: SetbaseurlService,
    public restApiService: RestApiService,
    ) {
      this.Site_url = this.baseurl.Set_base_url;
  }


  async Login() {
    if (!this.Username || !this.Password) {
      this.showError('Please fill the mandatory fields.');
    } else {
      const loading = await this.loadingController.create({
        message: 'Please wait',
        duration: 50000
      });
      await loading.present();
  
      this.http.get<string>(`${this.Site_url}/get_login/${this.Username}/${this.Password}`).subscribe({
        next: (data: string) => {
          this.ReturnString = data;
          console.log('ReturnString : ', this.ReturnString);
  
          loading.dismiss();
          
          if (this.ReturnString === "Valid") {
            this.showError('Welcome ' + this.Username);
            this.router.navigate(['/dashboard']);
          } else {
            this.showError('Invalid credentials. Please try again later.');
          }
          
          this.Username = "";
          this.Password = "";
        },
        error: (err : any) => {
          console.error('Error occurred during login', err);
          this.showError('An error occurred. Please try again later.');
          loading.dismiss();
        }
      });
    }
  }

  async showError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();

  }
  ngOnInit() {
  }

}
