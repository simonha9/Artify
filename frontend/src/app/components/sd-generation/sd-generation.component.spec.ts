import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdGenerationComponent } from './sd-generation.component';

describe('SdGenerationComponent', () => {
  let component: SdGenerationComponent;
  let fixture: ComponentFixture<SdGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdGenerationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
