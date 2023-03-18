import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5generationComponent } from './p5generation.component';

describe('P5generationComponent', () => {
  let component: P5generationComponent;
  let fixture: ComponentFixture<P5generationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P5generationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(P5generationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
