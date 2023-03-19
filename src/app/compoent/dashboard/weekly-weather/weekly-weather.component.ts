import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.css']
})
export class WeeklyWeatherComponent {

  @Input() weeklyWeather: any;
}
