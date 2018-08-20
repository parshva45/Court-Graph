require('chartjs-plugin-zoom');

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CourtServiceClient } from '../services/court.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private courtService: CourtServiceClient) { }

  lineChart = [];
  courtData = [];

  loadCharts() {

    const kWhData = [];

    for (let i = 0; i < this.courtData.length; i++) {
      if (this.courtData[i]['month'] === 1) {
        kWhData.push({
          x: new Date(this.courtData[i]['year'],
            this.courtData[i]['month'] - 1,
            this.courtData[i]['day'],
            this.courtData[i]['hour'],
            this.courtData[i]['minute']),
          y: this.courtData[i]['kWh']
        });
      }
    }

    this.lineChart = new Chart('lineChart', {
      type: 'scatter',
      data: {
        datasets: [{
          data: kWhData,
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
          text: 'Pattern of kWh over time'
        },
        scales: {
          xAxes: [{
            type: 'time'
          }],
          yAxes: [{
            ticks: {
              min: 5,
              max: 35
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
  }

  ngOnInit() {

    this.courtService.findAllCourts()
      .then(courts => {
        this.courtData = courts;
        this.loadCharts();
      });
  }

}
