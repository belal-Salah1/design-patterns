import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStateState } from './order-state-state';

describe('OrderStateState', () => {
  let component: OrderStateState;
  let fixture: ComponentFixture<OrderStateState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStateState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStateState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
