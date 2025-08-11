import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedForYouComponent } from './recomended-for-you.component';

describe('RecomendedForYouComponent', () => {
  let component: RecomendedForYouComponent;
  let fixture: ComponentFixture<RecomendedForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendedForYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendedForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
