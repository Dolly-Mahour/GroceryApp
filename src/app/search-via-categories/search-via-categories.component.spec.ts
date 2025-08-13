import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViaCategoriesComponent } from './search-via-categories.component';

describe('SearchViaCategoriesComponent', () => {
  let component: SearchViaCategoriesComponent;
  let fixture: ComponentFixture<SearchViaCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchViaCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchViaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
