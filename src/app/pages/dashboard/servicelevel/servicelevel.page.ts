import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from 'src/app/rest-api.service';
import { LoadingController } from '@ionic/angular';
import { SetbaseurlService } from 'src/app/setbaseurl.service';

@Component({
  selector: 'app-servicelevel',
  templateUrl: './servicelevel.page.html',
  styleUrls: ['./servicelevel.page.scss'],
})
export class ServicelevelPage implements OnInit {

  @ViewChild('pieChartCanvas1', { static: false }) pieChartCanvas1?: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChartCanvas2', { static: false }) pieChartCanvas2?: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChartCanvas3', { static: false }) pieChartCanvas3?: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChartCanvas4', { static: false }) pieChartCanvas4?: ElementRef<HTMLCanvasElement>;

  Site_url: string = "";
  OverallData: any = "";
  ImperialData: any = "";
  GeneralData: any = "";
  POMData: any = "";
  private fetchDataInterval: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private baseurl: SetbaseurlService,
    public restApiService: RestApiService,
    public loadingController: LoadingController,
  ) {
    this.Site_url = this.baseurl.Set_base_url;
    this.GetData();
  }

  ngAfterViewInit() {
    // Initial chart creation if needed
  }
  
  ngOnInit() {
    this.GetData();
  }

  ionViewWillEnter() {
    console.log("ServicelevelPage ionViewWillEnter called");
    this.GetData();
  }

  ionViewWillLeave() {
    console.log("ServicelevelPage ionViewWillLeave called");
    if (this.fetchDataInterval) {
      clearInterval(this.fetchDataInterval);
      console.log("ServicelevelPage fetchDataInterval cleared");
    }
  }

  ngOnDestroy() {
    console.log("ServicelevelPage ngOnDestroy called");
    if (this.fetchDataInterval) {
      clearInterval(this.fetchDataInterval);
      console.log("ServicelevelPage fetchDataInterval cleared");
    }
  }


  async GetData() {
    const fetchData = async () => {
      this.http.get(this.Site_url + 'getSlOverall').subscribe(data => {
        this.OverallData = data;
        console.log('Overall Data', this.OverallData);
        this.createChart(this.pieChartCanvas1, [this.OverallData.NonAnsweredPercentage, this.OverallData.AnsweredPercentage], ['#f6fcfd', '#d31d25']);
      });

      this.http.get(this.Site_url + 'getSlGeneral').subscribe(data => {
        this.GeneralData = data;
        console.log('General Data', this.GeneralData);
        this.createChart(this.pieChartCanvas2, [this.GeneralData.NonAnsweredPercentage, this.GeneralData.AnsweredPercentage], ['#f6fcfd', '#d31d25']);
      });

      this.http.get(this.Site_url + 'getSlImperial').subscribe(data => {
        this.ImperialData = data;
        console.log('Imperial Data', this.ImperialData);
        this.createChart(this.pieChartCanvas3, [this.ImperialData.NonAnsweredPercentage, this.ImperialData.AnsweredPercentage], ['#f6fcfd', '#d31d25']);
      });

      this.http.get(this.Site_url + 'GetSlPom').subscribe(data => {
        this.POMData = data;
        console.log('POM Data', this.POMData);
        this.createChart(this.pieChartCanvas4, [this.POMData.NonconnectedPercentage, this.POMData.connectedPercentage], ['#f6fcfd', '#d31d25']);
      });

      // loading.dismiss();
    };

    // Call initially and then every 15 seconds
    // fetchData();
    // setInterval(fetchData, 15000); // 15 seconds interval in milliseconds
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

  private createChart(canvas: ElementRef<HTMLCanvasElement> | undefined, data: number[], colors: string[]) {
    if (canvas) {
      const chartCtx = canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;

      if (chartCtx) {
        const existingChart = (canvas.nativeElement as any).myChart;
        if (existingChart) {
          existingChart.destroy();
        }

        const chartData = {
          datasets: [{
            data: data,
            backgroundColor: colors,
            hoverBackgroundColor: colors,
          }],
        };

        const options = {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
            datalabels: {
              formatter: (value: number, context: any) => {
                const total = context.chart.data.datasets[0].data.reduce((acc: number, curr: number) => acc + curr, 0);
                const percentage = ((value / total) * 100).toFixed(1) + '%';
                return percentage;
              },
              anchor: 'center',
              color: 'white',
              font: {
                weight: 'bold', // Set the font weight to 'bold'
                size: 20, // Adjust the font size to your preferred value
              },
            },
          },
        };

        Chart.register(ChartDataLabels);

        const newChart = new Chart(chartCtx, {
          type: 'doughnut',
          data: chartData,
          // options: options,
        });

        (canvas.nativeElement as any).myChart = newChart;
      }
    }
  }

  // Footer navigation methods
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
