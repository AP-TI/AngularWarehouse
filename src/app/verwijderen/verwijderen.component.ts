import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verwijderen',
  templateUrl: './verwijderen.component.html',
  styleUrls: ['./verwijderen.component.css']
})
export class VerwijderenComponent  {
  productDeleteForm = this.fb.group({
     naam: ['', Validators.required],
  });

  constructor(private ps: ProductsService,
              private fb: FormBuilder, 
              private router: Router) {}

  onSubmit() {
      this.ps.deleteProduct(this.productDeleteForm.value.naam);
      this.router.navigate(['lijst']);
  }
}
