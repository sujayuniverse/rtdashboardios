import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from 'src/app/rest-api.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { SetbaseurlService } from 'src/app/setbaseurl.service';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agentlist',
  templateUrl: './agentlist.page.html',
  styleUrls: ['./agentlist.page.scss'],
})
export class AgentlistPage implements OnInit {

  Site_url: string = "";
  AgentList: any = ""
  private fetchDataInterval: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private http: HttpClient,
    private baseurl: SetbaseurlService,
    public restApiService: RestApiService,
    private alertCtrl: AlertController,
    public loadingController: LoadingController,
    private toastController: ToastController,
    private platform: Platform,
    private activatedRoute: ActivatedRoute) {
    this.Site_url = this.baseurl.Set_base_url
    this.GetData()
  }

  ngOnInit() {
    this.GetData();
  }

  ionViewWillEnter() {
    console.log("agentlist ionViewWillEnter called");
    this.GetData();
  }

  ionViewWillLeave() {
    console.log("agentlist ionViewWillLeave called");
    if (this.fetchDataInterval) {
      clearInterval(this.fetchDataInterval);
      console.log("fetchDataInterval cleared");
    }
  }

  ngOnDestroy() {
    console.log("agentlist ngOnDestroy called");
    if (this.fetchDataInterval) {
      clearInterval(this.fetchDataInterval);
      console.log("fetchDataInterval cleared");
    }
  }

  async GetData() {
    const fetchData = async () => {


      this.http.get(this.Site_url + 'get_detailAgentstats').subscribe(data => {
        this.AgentList = data;
        console.log('Agent List', this.AgentList);
      });


      // loading.dismiss();
    };

    // Clear any existing intervals before setting a new one
    if (this.fetchDataInterval) {
      clearInterval(this.fetchDataInterval);
      console.log("Previous fetchDataInterval cleared before setting new one");
    }

    // Call initially and then every 15 seconds
    fetchData();
    this.fetchDataInterval = setInterval(fetchData, 15000); // 15 seconds interval in milliseconds
    console.log("fetchDataInterval set");
  }


  //footer start
  async Home() {
    this.router.navigate(['/dashboard']);
  }

  async Agents() {
    this.router.navigate(['/agentlist']);

  }

  async ServiceLevel() {
    this.router.navigate(['/servicelevel']);
  }

  async DailyStats() {
    this.router.navigate(['/dailystats']);

  }

}
