import { Component, Input } from '@angular/core';
import { ThreedayspredictionService } from 'src/app/service/threedaysprediction.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-threedays-weather',
  templateUrl: './threedays-weather.component.html',
  styleUrls: ['./threedays-weather.component.css'],
})
export class ThreedaysWeatherComponent {
  @Input() current3Weather: any;
  constructor(private http: HttpClient) {}
}
