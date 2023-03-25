import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationPreviewComponent } from './generation-preview.component';

describe('GenerationPreviewComponent', () => {
  let component: GenerationPreviewComponent;
  let fixture: ComponentFixture<GenerationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerationPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenerationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
