import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoInputDemoComponent } from './two-input-demo.component';

describe('TwoInputDemoComponent', () => {
  let component: TwoInputDemoComponent;
  let fixture: ComponentFixture<TwoInputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoInputDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
