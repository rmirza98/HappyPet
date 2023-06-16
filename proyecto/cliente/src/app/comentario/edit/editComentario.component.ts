import { Component, OnInit } from '@angular/core';

import { ComentarioService } from '../comentario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-edit',
  templateUrl: './editComentario.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComentarioComponent implements OnInit {

  id: number;
  comentario: Comentario= {} as Comentario;
  form: FormGroup;

  constructor(
    public comentarioService: ComentarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['idComentario'];
    this.comentarioService.find(this.id).subscribe((data: Comentario)=>{
      this.comentario = data;
    });

    this.form = new FormGroup({
      texto:  new FormControl()

    });
   }

  ngOnInit(): void {
   

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.comentarioService.update(this.id, this.form.value).subscribe(res => {
         console.log('comentario updated successfully!');
         this.router.navigateByUrl('../../producto/index');
    })
  }

}
