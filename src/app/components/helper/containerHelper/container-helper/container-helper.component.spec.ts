import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHelperComponent } from './container-helper.component';

describe('ContainerHelperComponent', () => {
  let component: ContainerHelperComponent;
  let fixture: ComponentFixture<ContainerHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
