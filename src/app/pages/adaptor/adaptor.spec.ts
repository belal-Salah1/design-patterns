import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adaptor } from './adaptor';

describe('Adaptor', () => {
  let component: Adaptor;
  let fixture: ComponentFixture<Adaptor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adaptor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adaptor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
