import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
public formGroup!: FormGroup;
constructor(){
this.formGroup=new FormGroup({
  libelle : new FormControl('',[Validators.required,Validators.minLength(5)],),
  description : new FormControl('',[Validators.required,Validators.minLength(5)]),
  prix : new FormControl('',[Validators.required,Validators.min(0)]),
  quantite : new FormControl('',[Validators.required,Validators.min(0)]),
})
}
}
