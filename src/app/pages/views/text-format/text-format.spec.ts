import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormat } from './text-format';

describe('TextFormat', () => {
  let component: TextFormat;
  let fixture: ComponentFixture<TextFormat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFormat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFormat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
