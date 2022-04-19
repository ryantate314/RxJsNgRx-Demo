import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithNgrxComponent } from './with-ngrx.component';

describe('WithNgrxComponent', () => {
  let component: WithNgrxComponent;
  let fixture: ComponentFixture<WithNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
