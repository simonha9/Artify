import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdViewComponent } from './sd-view.component';

describe('SdViewComponent', () => {
  let component: SdViewComponent;
  let fixture: ComponentFixture<SdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
