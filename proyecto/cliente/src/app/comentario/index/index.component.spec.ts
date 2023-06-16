import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComentarioComponent } from './indexComentario.component';

describe('IndexComentarioComponent', () => {
  let component: IndexComentarioComponent;
  let fixture: ComponentFixture<IndexComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
