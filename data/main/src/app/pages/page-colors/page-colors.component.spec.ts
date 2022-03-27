import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageColorsComponent } from './page-colors.component';

describe('PageColorsComponent', () => {
  let component: PageColorsComponent;
  let fixture: ComponentFixture<PageColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
