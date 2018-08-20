import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CourtServiceClient } from '../services/court.service.client';
import 'chartjs-plugin-zoom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private courtService: CourtServiceClient) { }

  kWhChart = null;
  kWhDoughnut = null;
  kWhPie = null;
  powerFactorChart = null;
  powerFactorDoughnut = null;
  powerFactorPie = null;
  courtData = [];
  kWhMonth = 1;
  powerFactorMonth = 1;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

  loadKWHChart() {

    const kWhScatterData = [];
    const kWhDoughnutData = [0, 0, 0, 0];
    if (this.kWhChart !== null) {
      this.kWhChart.destroy();
    }

    for (let i = 0; i < this.courtData.length; i++) {
      if (this.courtData[i]['month'] === this.kWhMonth) {
        kWhScatterData.push({
          x: new Date(this.courtData[i]['year'],
            this.courtData[i]['month'] - 1,
            this.courtData[i]['day'],
            this.courtData[i]['hour'],
            this.courtData[i]['minute']),
          y: this.courtData[i]['kWh']
        });
        if (this.courtData[i]['kWh'] < 10) {
          kWhDoughnutData[0]++;
        } else if (this.courtData[i]['kWh'] < 20) {
          kWhDoughnutData[1]++;
        } else if (this.courtData[i]['kWh'] < 30) {
          kWhDoughnutData[2]++;
        } else {
          kWhDoughnutData[3]++;
        }
      }
    }

    this.kWhChart = new Chart('kWhChart', {
      type: 'scatter',
      data: {
        datasets: [{
          data: kWhScatterData,
          label: 'kWh',
          borderColor: '#3e95cd',
          fill: false,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#020079'
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Pattern of kWh for the month of ' + this.months[this.kWhMonth - 1] +
            ' (Scroll or Pinch to Zoom, Drag to Pan)'
        },
        scales: {
          xAxes: [{
            type: 'time'
          }],
          yAxes: [{
            ticks: {
              min: 5,
              max: 40
            }
          }]
        },
        pan: {
          enabled: true,
          mode: 'x'
        },
        zoom: {
          enabled: true,
          mode: 'x'
        }
      }
    });

    if (this.kWhDoughnut !== null) {
      this.kWhDoughnut.destroy();
    }

    this.kWhDoughnut = new Chart('kWhDoughnut', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: kWhDoughnutData,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#567C65'
          ],
          borderColor: 'black',
          borderWidth: 2
        }],
        labels: ['<10', '10-20', '20-30', '>30']
      },
      options: {
        title: {
          display: true,
          text: 'Density of kWh for the month of ' + this.months[this.kWhMonth - 1]
        }
      }
    });

  }

  loadKWHPieChart() {
    const kWhPieData = [0, 0, 0, 0];

    for (let i = 0; i < this.courtData.length; i++) {
      if (this.courtData[i]['kWh'] < 10) {
        kWhPieData[0]++;
      } else if (this.courtData[i]['kWh'] < 20) {
        kWhPieData[1]++;
      } else if (this.courtData[i]['kWh'] < 30) {
        kWhPieData[2]++;
      } else {
        kWhPieData[3]++;
      }
    }

    this.kWhPie = new Chart('kWhPie', {
      type: 'pie',
      data: {
        datasets: [{
          data: kWhPieData,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#567C65'
          ],
          borderColor: 'black',
          borderWidth: 2
        }],
        labels: ['<10', '10-20', '20-30', '>30']
      },
      options: {
        title: {
          display: true,
          text: 'Density of kWh overall'
        }
      }
    });

  }

  loadPowerFactorChart() {

    const powerFactorScatterData = [];
    const powerFactorDoughnutData = [0, 0, 0];
    if (this.powerFactorChart !== null) {
      this.powerFactorChart.destroy();
    }

    for (let i = 0; i < this.courtData.length; i++) {
      if (this.courtData[i]['month'] === this.powerFactorMonth) {
        powerFactorScatterData.push({
          x: new Date(this.courtData[i]['year'],
            this.courtData[i]['month'] - 1,
            this.courtData[i]['day'],
            this.courtData[i]['hour'],
            this.courtData[i]['minute']),
          y: this.courtData[i]['PowerFactor']
        });
        if (this.courtData[i]['PowerFactor'] < 0.85) {
          powerFactorDoughnutData[0]++;
        } else if (this.courtData[i]['PowerFactor'] < 0.95) {
          powerFactorDoughnutData[1]++;
        } else {
          powerFactorDoughnutData[2]++;
        }
      }
    }

    this.powerFactorChart = new Chart('powerFactorChart', {
      type: 'scatter',
      data: {
        datasets: [{
          data: powerFactorScatterData,
          label: 'Power Factor',
          borderColor: '#5CA733',
          fill: false,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#024448'
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Pattern of Power Factor for the month of ' + this.months[this.powerFactorMonth - 1] +
          ' (Scroll or Pinch to Zoom, Drag to Pan)'
        },
        scales: {
          xAxes: [{
            type: 'time'
          }],
          yAxes: [{
            ticks: {
              min: 0.75,
              max: 1
            }
          }]
        },
        pan: {
          enabled: true,
          mode: 'x'
        },
        zoom: {
          enabled: true,
          mode: 'x'
        }
      }
    });

    if (this.powerFactorDoughnut !== null) {
      this.powerFactorDoughnut.destroy();
    }

    this.powerFactorDoughnut = new Chart('powerFactorDoughnut', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: powerFactorDoughnutData,
          backgroundColor: [
            '#CF56E2',
            '#BEB5AB',
            '#FE9900'
          ],
          borderColor: 'black',
          borderWidth: 2
        }],
        labels: ['<0.85', '0.85-0.95', '>0.95']
      },
      options: {
        title: {
          display: true,
          text: 'Density of Power Factor for the month of ' + this.months[this.powerFactorMonth - 1]
        }
      }
    });

  }

  loadPowerFactorPieChart() {
    const powerFactorPieData = [0, 0, 0];

    for (let i = 0; i < this.courtData.length; i++) {
      if (this.courtData[i]['PowerFactor'] < 0.85) {
        powerFactorPieData[0]++;
      } else if (this.courtData[i]['PowerFactor'] < 0.95) {
        powerFactorPieData[1]++;
      } else {
        powerFactorPieData[2]++;
      }
    }

    this.powerFactorPie = new Chart('powerFactorPie', {
      type: 'pie',
      data: {
        datasets: [{
          data: powerFactorPieData,
          backgroundColor: [
            '#CF56E2',
            '#BEB5AB',
            '#FE9900'
          ],
          borderColor: 'black',
          borderWidth: 2
        }],
        labels: ['<0.85', '0.85-0.95', '>0.95']
      },
      options: {
        title: {
          display: true,
          text: 'Density of Power Factor overall'
        }
      }
    });

  }

  ngOnInit() {

    this.courtService.findAllCourts()
      .then(courts => {
        this.courtData = courts;
        this.loadKWHChart();
        this.loadKWHPieChart();
        this.loadPowerFactorChart();
        this.loadPowerFactorPieChart();
      });
  }

}
