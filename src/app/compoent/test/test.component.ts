import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  productAll: any[] = [];
  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.weatherService.getAllProduct().subscribe((res) => {
      this.productAll=res;
      console.log(this.productAll);
    })
  }
}
