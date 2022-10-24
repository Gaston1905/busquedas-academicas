import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMethodologiesComponent } from './learning-methodologies.component';

describe('LearningMethodologiesComponent', () => {
  let component: LearningMethodologiesComponent;
  let fixture: ComponentFixture<LearningMethodologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningMethodologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningMethodologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
