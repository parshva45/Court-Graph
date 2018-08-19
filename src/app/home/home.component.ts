import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  lineChart = [];

  courtData = [
    {
      '_id' : '5b77d876234dcae49e83546d',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x0_50',
      'PowerFactor' : 0.942748,
      'kWh' : 10.77,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 0,
      'minute' : 50
    },
    {
      '_id' : '5b77d876234dcae49e83546e',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x1_10',
      'PowerFactor' : 0.939866,
      'kWh' : 11.309999,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 1,
      'minute' : 10
    },
    {
      '_id' : '5b77d876234dcae49e83546f',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x1_15',
      'PowerFactor' : 0.936801,
      'kWh' : 12.21,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 1,
      'minute' : 15
    },
    {
      '_id' : '5b77d876234dcae49e835470',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x1_20',
      'PowerFactor' : 0.938343,
      'kWh' : 11.4,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 1,
      'minute' : 20
    },
    {
      '_id' : '5b77d876234dcae49e835471',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x1_35',
      'PowerFactor' : 0.939161,
      'kWh' : 11.73,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 1,
      'minute' : 35
    },
    {
      '_id' : '5b77d876234dcae49e835472',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x1_40',
      'PowerFactor' : 0.93623,
      'kWh' : 11.67,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 1,
      'minute' : 40
    },
    {
      '_id' : '5b77d876234dcae49e835473',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x1_45',
      'PowerFactor' : 0.939433,
      'kWh' : 11.429999,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 1,
      'minute' : 45
    },
    {
      '_id' : '5b77d876234dcae49e835474',
      'Account' : 26432071004,
      'Date' : '01-01-14',
      'Channel' : '605108098 1 Power Factor',
      'time' : 'x1_50',
      'PowerFactor' : 0.938343,
      'kWh' : 11.969999,
      'month' : 1,
      'year' : 2014,
      'day' : 1,
      'hour' : 1,
      'minute' : 50
    }
  ];

  ngOnInit() {
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: 'Africa',
          borderColor: '#3e95cd',
          fill: false
        },  {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: 'Asia',
          borderColor: '#8e5ea2',
          fill: false
        },  {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: 'Europe',
          borderColor: '#3cba9f',
          fill: false
        }, {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: 'Latin America',
          borderColor: '#e8c3b9',
          fill: false
        }, {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: 'North America',
          borderColor: '#c45850',
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    });
  }

}
