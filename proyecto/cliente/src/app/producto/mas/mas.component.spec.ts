import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasProductoComponent } from './masProducto.component';

describe('MasProductoComponent', () => {
  let component: MasProductoComponent;
  let fixture: ComponentFixture<MasProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
