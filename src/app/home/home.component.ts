import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

  ngOnInit() { }

}
