import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StableDiffusionComponent } from './stable-diffusion.component';

describe('StableDiffusionComponent', () => {
  let component: StableDiffusionComponent;
  let fixture: ComponentFixture<StableDiffusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StableDiffusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StableDiffusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
