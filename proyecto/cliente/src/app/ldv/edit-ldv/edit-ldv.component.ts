import { Component, OnInit } from '@angular/core';

import { LdvService } from '../ldv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Ldv } from '../ldv';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-ldv.component.html',
  styleUrls: ['./edit-ldv.component.css']
})
export class EditLdvComponent implements OnInit {

  id: number;
  ldv: Ldv= {} as Ldv;
  form: FormGroup;

  constructor(
    public ldvService: LdvService,
    private route: ActivatedRoute,
    private router: Router
  ) {     this.id = this.route.snapshot.params['idLdv'];
  this.ldvService.find(this.id).subscribe((data: Ldv)=>{
    this.ldv = data;
  });

  this.form = new FormGroup({
    cantidad:  new FormControl()
  });}

  ngOnInit(): void {


  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value, this.id);
    this.ldvService.update(this.id, this.form.value).subscribe(res => {
         console.log('Ldv updated successfully!');
         this.router.navigateByUrl('ldv/indexLdv');
    })
  }

}
