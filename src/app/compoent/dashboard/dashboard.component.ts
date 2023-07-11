import { Component, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherService } from '../../service/weather.service';
import { WeeklyWeatherComponent } from './weekly-weather/weekly-weather.component';
import { WeeklypredictionService } from '../../service/weeklyprediction.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  currentWeather: any;
  current3Weather: any;
  weeklyWeather: any;
  constructor(
    private http: HttpClient,
    private weatherService: WeatherService,
    private weeklyWeatherService: WeeklypredictionService
  ) {}
  showCity: boolean = false;

  loading: boolean = false;
  errorMessage: string = '';
  location!: any;
  city: string = '';
  longtitude: string = '';
  latitude: string = '';
  showCoordinate: boolean = false;
  showWeatherPred:boolean=false;
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
    this.showWeatherPred=true;
    if (this.city != '') {
      this.loading = true;
      //const url:string=`http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&q=${this.city}&days=0`
      this.weatherService.getRepos(this.city).subscribe(
        (response) => {
          //next() callback
          console.log('response received');
          this.currentWeather = response;
          this.loading = false;
        },
        (error) => {
          //error() callback
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = true;
        },
        () => {
          //complete() callback
          console.error('Request completed'); //This is actually not needed
          this.loading = false;
        }
      );

      //store 3days weather
      this.weatherService.getRepos3days(this.city).subscribe(
        (response) => {
          //next() callback
          console.log('response received');
          this.current3Weather = response;
          this.loading = false;
        },
        (error) => {
          //error() callback
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = true;
        },
        () => {
          //complete() callback
          console.error('Request completed'); //This is actually not needed
          this.loading = false;
        }
      );
    } else if (this.longtitude != '' && this.latitude != '') {
      this.loading = true;
      //const url:string=`http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&q=${this.city}&days=0`
      this.weatherService
        .getCityByCoordinate(this.latitude, this.longtitude)
        .subscribe(
          (response) => {
            //next() callback
            console.log('response received');
            this.current3Weather = response;
            this.loading = false;
          },
          (error) => {
            //error() callback
            console.error('Request failed with error');
            this.errorMessage = error;
            this.loading = true;
          },
          () => {
            //complete() callback
            console.error('Request completed'); //This is actually not needed
            this.loading = false;
          }
        );

      this.weatherService
        .getCityByCoordinate3days(this.latitude, this.longtitude)
        .subscribe(
          (response) => {
            //next() callback
            console.log('response received');
            this.current3Weather = response;
            this.loading = false;
          },
          (error) => {
            //error() callback
            console.error('Request failed with error');
            this.errorMessage = error;
            this.loading = true;
          },
          () => {
            //complete() callback
            console.error('Request completed'); //This is actually not needed
            this.loading = false;
          }
        );
    } else {
      alert('Please enter the city or coordinate');
    }
  }

  showWeeklyWeather() {
    console.log('clcik show week weather weeklyWeather');

    if (this.city != '') {
      this.loading = true;
      //const url:string=`http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&q=${this.city}&days=0`
      this.weeklyWeatherService.getWeekCity(this.city).subscribe(
        (response: any) => {
          //next() callback
          console.log('response received');
          this.weeklyWeather = response;
          this.loading = false;
        },
        (error: any) => {
          //error() callback
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = true;
        },
        () => {
          //complete() callback
          console.error('Request completed'); //This is actually not needed
          this.loading = false;
        }
      );
    } else if (this.longtitude != '' && this.latitude != '') {
      this.loading = true;
      //const url:string=`http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&q=${this.city}&days=0`
      this.weeklyWeatherService
        .getWeekCoordinate(this.latitude, this.longtitude)
        .subscribe(
          (response: any) => {
            //next() callback
            console.log('response received');
            this.weeklyWeather = response;
            this.loading = false;
          },
          (error: any) => {
            //error() callback
            console.error('Request failed with error');
            this.errorMessage = error;
            this.loading = true;
          },
          () => {
            //complete() callback
            console.error('Request completed'); //This is actually not needed
            this.loading = false;
          }
        );

      this.weatherService
        .getCityByCoordinate3days(this.latitude, this.longtitude)
        .subscribe(
          (response) => {
            //next() callback
            console.log('response received');
            this.current3Weather = response;
            this.loading = false;
          },
          (error) => {
            //error() callback
            console.error('Request failed with error');
            this.errorMessage = error;
            this.loading = true;
          },
          () => {
            //complete() callback
            console.error('Request completed'); //This is actually not needed
            this.loading = false;
          }
        );
    } else {
      alert('Please enter the city or coordinate');
    }
  }
}
