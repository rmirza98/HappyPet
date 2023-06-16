import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVentaComponent } from './index-venta.component';

describe('IndexVentaComponent', () => {
  let component: IndexVentaComponent;
  let fixture: ComponentFixture<IndexVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
