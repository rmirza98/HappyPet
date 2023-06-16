import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriaComponent } from './create.Categoriacomponent';

describe('CreateCategoriaComponent', () => {
  let component: CreateCategoriaComponent;
  let fixture: ComponentFixture<CreateCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
