import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLdvComponent } from './index-ldv.component';

describe('IndexLdvComponent', () => {
  let component: IndexLdvComponent;
  let fixture: ComponentFixture<IndexLdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexLdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
