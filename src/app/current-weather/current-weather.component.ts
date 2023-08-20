import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
cityName:any;
weatherData:any;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(){
    this.weatherService.getWeather(this.cityName)
    .subscribe((res:any)=>{
      this.weatherData = res
    })
  }

}
