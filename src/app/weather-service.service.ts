import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

const httpOption = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private url = "https://pacific-wave-50441.herokuapp.com/api/weather/";

  constructor(private http: HttpClient) { }

  getWeather(id): Observable<Weather[]> {
     return this.http.get<Weather[]>(this.url + id);
  }
}
