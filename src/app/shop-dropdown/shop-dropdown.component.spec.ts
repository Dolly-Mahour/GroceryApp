import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDropdownComponent } from './shop-dropdown.component';

describe('ShopDropdownComponent', () => {
  let component: ShopDropdownComponent;
  let fixture: ComponentFixture<ShopDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
