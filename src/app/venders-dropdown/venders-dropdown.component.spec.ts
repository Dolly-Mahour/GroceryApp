import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendersDropdownComponent } from './venders-dropdown.component';

describe('VendersDropdownComponent', () => {
  let component: VendersDropdownComponent;
  let fixture: ComponentFixture<VendersDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendersDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendersDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
