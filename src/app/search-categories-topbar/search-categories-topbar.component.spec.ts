import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoriesTopbarComponent } from './search-categories-topbar.component';

describe('SearchCategoriesTopbarComponent', () => {
  let component: SearchCategoriesTopbarComponent;
  let fixture: ComponentFixture<SearchCategoriesTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCategoriesTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCategoriesTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
