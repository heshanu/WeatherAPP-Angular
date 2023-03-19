import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeeklypredictionService {
  dayWeather: number = 7;
  baseUrl: string = `http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&`;
  constructor(private http: HttpClient) {}

  public getWeekCity(city: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'q=' + city + '&days=7');
  }

  public getWeekCoordinate(
    latitude: string,
    longtitude: string
  ): Observable<any> {
    return this.http.get<any>(
      this.baseUrl +
        'q=' +
        latitude +
        ',' +
        longtitude +
        '&days=' +
        this.dayWeather
    );
  }
}
