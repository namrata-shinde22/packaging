import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtgUiButtonCssComponent } from './ptg-ui-button-css.component';

describe('PtgUiButtonCssComponent', () => {
  let component: PtgUiButtonCssComponent;
  let fixture: ComponentFixture<PtgUiButtonCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtgUiButtonCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtgUiButtonCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
