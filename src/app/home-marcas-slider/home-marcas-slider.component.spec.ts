import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarcasSliderComponent } from './home-marcas-slider.component';

describe('HomeMarcasSliderComponent', () => {
  let component: HomeMarcasSliderComponent;
  let fixture: ComponentFixture<HomeMarcasSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMarcasSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMarcasSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
