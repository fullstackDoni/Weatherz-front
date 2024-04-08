import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WeatherService} from './weather.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule,
    CommonModule, HttpClientModule],
})
export class AppComponent {
  city = '';
  weather: any;

  constructor(private weatherService: WeatherService) {
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weather = data;
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

}

