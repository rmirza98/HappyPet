import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLdvComponent } from './edit-ldv.component';

describe('EditLdvComponent', () => {
  let component: EditLdvComponent;
  let fixture: ComponentFixture<EditLdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
