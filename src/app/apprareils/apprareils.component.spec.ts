import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprareilsComponent } from './apprareils.component';

describe('ApprareilsComponent', () => {
  let component: ApprareilsComponent;
  let fixture: ComponentFixture<ApprareilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprareilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprareilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
