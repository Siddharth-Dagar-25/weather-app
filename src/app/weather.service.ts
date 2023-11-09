import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&{5d40980a5faf8325d88bd300fbf2c6a1}&units=' + units);
  }
}

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=5d40980a5faf8325d88bd300fbf2c6a1
