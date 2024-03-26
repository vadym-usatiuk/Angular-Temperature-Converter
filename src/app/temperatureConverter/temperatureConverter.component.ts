import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  mymodel: number;
  F: number;

  ngOnInit() {
  }
valuechange(newValue) {
  this.mymodel = newValue;
  this.F = Math.round((this.mymodel * 9/5 + 32)*10)/10;
  console.log(this.F);
}
valuechanges(newValue) {
  this.F = newValue;
  this.mymodel = Math.round(((this.F - 32) * 5/9)*10)/10;
  console.log(this.mymodel);
}
}
