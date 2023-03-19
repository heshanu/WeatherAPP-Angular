import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oneday-weather',
  templateUrl: './oneday-weather.component.html',
  styleUrls: ['./oneday-weather.component.css'],
})
export class OnedayWeatherComponent {
  @Input() currentWeather: any;
  @Input() current3Weather: any;
}
