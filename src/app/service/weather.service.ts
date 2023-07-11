import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  //const url:string=`http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&q=${this.city}&days=0`
  baseUrl: string = `http://api.weatherapi.com/v1/current.json?key=61701315568d4faaa22163510231303&`;
  baseUrlThreedays: string = `http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&`;
  constructor(private http: HttpClient) {}

  public getRepos(city: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'q=' + city + '&days=0');
  }

  public getCityByCoordinate(
    latitude: string,
    longtitude: string
  ): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'q=' + latitude + ',' + longtitude + '&days=0'
    );
  }
   public getRepos3days(city: string): Observable<any> {
    return this.http.get<any>(this.baseUrlThreedays + 'q=' + city + '&days=3');
  }

  public getCityByCoordinate3days(
    latitude: string,
    longtitude: string
  ): Observable<any> {
    return this.http.get<any>(
      this.baseUrlThreedays + 'q=' + latitude + ',' + longtitude + '&days=2'
    );
  }

  public getAllProduct():Observable<any>{
    return this.http.get<any>('http://localhost:8090/api/v1/product/all');
  }
}
