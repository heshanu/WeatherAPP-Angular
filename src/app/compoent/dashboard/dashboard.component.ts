import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherService } from '../../service/weather.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}
  showCity: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';

  currentWeather: any[] = [];

  location: string = '';
  city: string = '';
  longtitude: string = '';
  latitude: string = '';
  showCoordinate: boolean = false;
  public radioButtonResult($event: any) {
    //alert($event.target.value);
    if ($event.target.value == 'city') {
      this.showCity = true;
      //console.log($event.target.value);;\
    } else if ($event.target.value == 'coordinate') {
      this.showCoordinate = true;
    }
  }

  public clearInput() {
    this.showCity = false;
    this.showCoordinate = false;
  }

  public findCity($event: any) {
    this.city = $event.target.value;
    // console.log(this.city);
  }

  public findLongtitude($event: any) {
    this.longtitude = $event.target.value;
    // console.log(this.longtitude);
  }

  public findAltitude($event: any) {
    this.latitude = $event.target.value;
    // console.log(this.latitude);
  }

  submitResult() {
    if (this.city != '') {
      // console.log(this.city);
      //const url:string=`http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&q=${this.city}&days=0`
      this.weatherService.getRepos(this.city).subscribe(
        (response) => {
          //next() callback
          console.log('response received');
          this.currentWeather = response;
          Object.values(this.currentWeather);
        },
        (error) => {
          //error() callback
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          //complete() callback
          console.error('Request completed'); //This is actually not needed
          this.loading = false;
        }
      );
    } else if (this.longtitude != '' && this.latitude != '') {
      //console.log(this.longtitude);
      //  console.log(this.latitude);
    } else {
      alert('Please enter the city or coordinate');
    }
  }

  /*public getCurrentWeather(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';

    return this.http.get<any>(url);
  }*/
}