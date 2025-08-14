import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAfterCarouselComponent } from './add-after-carousel.component';

describe('AddAfterCarouselComponent', () => {
  let component: AddAfterCarouselComponent;
  let fixture: ComponentFixture<AddAfterCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAfterCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAfterCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
