import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherForecast } from '../models/WeatherForecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public forecasts?: WeatherForecast[];

  constructor(private http: HttpClient) { }

  getWeatherForecast =  () => {
    return this.http.get<WeatherForecast[]>('/weatherforecast');
  }

  //constructor(http: HttpClient) {
  //  http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}

}
