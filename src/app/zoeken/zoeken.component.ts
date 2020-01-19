import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zoeken',
  templateUrl: './zoeken.component.html',
  styleUrls: ['./zoeken.component.css']
})
export class ZoekenComponent {
  producten: Product[];

  productZoekenForm = this.fb.group({
    naam: ['', Validators.required]
  });

  constructor(
    private ps: ProductsService,
    private fb: FormBuilder,
    private router: Router) { }

  onSubmit() {
    console.log(this.productZoekenForm.value.naam);
    this.ps.getItem(this.productZoekenForm.value.naam)
      .subscribe(data => { this.producten = data});
  }

}
