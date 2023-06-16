import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-edit',
  templateUrl: './editCategoria.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditCategoriaComponent implements OnInit {

  id: number;
  categoria: Categoria= {} as Categoria;
  form: FormGroup;

  constructor(
    public categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.id = this.route.snapshot.params['idCategoria'];
    this.categoriaService.find(this.id).subscribe((data: Categoria)=>{
      this.categoria = data;
    });

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
    this.categoriaService.update(this.id, this.form.value).subscribe(res => {
         console.log('Categoria updated successfully!');
         this.router.navigateByUrl('categoria/index');
    })
  }

}
