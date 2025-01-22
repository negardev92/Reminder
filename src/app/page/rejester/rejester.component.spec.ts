import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejesterComponent } from './rejester.component';

describe('RejesterComponent', () => {
  let component: RejesterComponent;
  let fixture: ComponentFixture<RejesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
