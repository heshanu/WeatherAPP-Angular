import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedayWeatherComponent } from './oneday-weather.component';

describe('OnedayWeatherComponent', () => {
  let component: OnedayWeatherComponent;
  let fixture: ComponentFixture<OnedayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnedayWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnedayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
