import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCrouselComponent } from './categories-crousel.component';

describe('CategoriesCrouselComponent', () => {
  let component: CategoriesCrouselComponent;
  let fixture: ComponentFixture<CategoriesCrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesCrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
