import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherForecast } from './models/WeatherForecast';
import { AuthService } from './services/auth.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'phonebook';
  public forecasts?: WeatherForecast[];

  constructor(public authService: AuthService) { }
}

