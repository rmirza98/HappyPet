import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLdvComponent } from './create-ldv.component';

describe('CreateLdvComponent', () => {
  let component: CreateLdvComponent;
  let fixture: ComponentFixture<CreateLdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
