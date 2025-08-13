import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLineComponent } from './support-line.component';

describe('SupportLineComponent', () => {
  let component: SupportLineComponent;
  let fixture: ComponentFixture<SupportLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
