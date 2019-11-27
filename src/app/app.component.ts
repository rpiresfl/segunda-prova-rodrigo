import { Component } from '@angular/core';
import { WeatherServiceService } from '../app/weather-service.service';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova2';

  constructor(private weatherService: WeatherServiceService) {
    this.loadWeather('sp');
  }

  weathers: Weather[] = [];

  loadWeather(id: string) {
    this.weathers.splice(0, this.weathers.length);
    this.weatherService.getWeather(id).subscribe(
      data => {
        data.forEach(element => {
          let weather: Weather;
          weather = element;
          weather.weather_state_abbr = '../assets/images/' + weather.weather_state_abbr + '.svg';
          this.weathers.push(weather);
        });

        // this.weathers = data;
        console.log(this.weathers);
      }
    );
  }
}
