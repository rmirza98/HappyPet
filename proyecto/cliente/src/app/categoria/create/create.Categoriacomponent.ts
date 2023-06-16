import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './createCategoria.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  form: FormGroup;

  constructor(
    public categoriaService: CategoriaService,
    private router: Router
  ) {   
    this.form = new FormGroup({
    nombre:  new FormControl()
    
  });
}

  ngOnInit(): void {

 
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.categoriaService.create(this.form.value).subscribe(res => {
         console.log('Categoria created successfully!');
         this.router.navigateByUrl('categoria/index');
    })
  }

}
