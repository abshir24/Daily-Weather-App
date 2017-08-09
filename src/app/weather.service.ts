import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from "@angular/http";
import "rxjs";

@Injectable()
export class WeatherService {


  constructor(private _http:Http) { }
  

  getWeather(city:String){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8a8b31bd9b0317ce097dd8807d29cbd0`)
    .map(data => data.json())
    .toPromise()
    }
  }

