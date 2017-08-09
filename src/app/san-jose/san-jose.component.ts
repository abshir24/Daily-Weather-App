import { Component, OnInit } from '@angular/core';
import { WeatherService } from "app/weather.service";

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;
 
  constructor(private _weatherService:WeatherService) { }

  ngOnInit(){
    this.weather =this._weatherService.getWeather('sanjose')
    .then(weather => {
      console.log(weather)
      this.temp = Math.floor(weather.main.temp * (9/5) - 459.67); 
      this.maxTemp = Math.floor(weather.main.temp_max * (9/5) - 459.67); 
      this.minTemp = Math.floor(weather.main.temp_min * (9/5) - 459.67);
      this.humidity = weather.main.humidity
      this.wind = weather.wind.speed
      this.clouds = weather.clouds.all
    })
  }
}
