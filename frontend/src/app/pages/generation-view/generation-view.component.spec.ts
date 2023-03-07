import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationViewComponent } from './generation-view.component';

describe('GenerationViewComponent', () => {
  let component: GenerationViewComponent;
  let fixture: ComponentFixture<GenerationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerationViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenerationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
