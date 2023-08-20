import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey="f1b84fbbd1be09605821beb327f4cff1"

  constructor(
    private httpClient : HttpClient
  ) { }
  getWeather(city:string){
    // let params ={
    //   q : city,
    //   appid : this.apiKey
    // }
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);

  }
}
