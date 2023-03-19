import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedaysWeatherComponent } from './threedays-weather.component';

describe('ThreedaysWeatherComponent', () => {
  let component: ThreedaysWeatherComponent;
  let fixture: ComponentFixture<ThreedaysWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedaysWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreedaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
