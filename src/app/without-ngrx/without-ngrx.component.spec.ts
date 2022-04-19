import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutNgrxComponent } from './without-ngrx.component';

describe('WithoutNgrxComponent', () => {
  let component: WithoutNgrxComponent;
  let fixture: ComponentFixture<WithoutNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
