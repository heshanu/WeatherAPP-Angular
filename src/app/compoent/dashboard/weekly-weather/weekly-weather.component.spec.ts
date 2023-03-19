import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyWeatherComponent } from './weekly-weather.component';

describe('WeeklyWeatherComponent', () => {
  let component: WeeklyWeatherComponent;
  let fixture: ComponentFixture<WeeklyWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
