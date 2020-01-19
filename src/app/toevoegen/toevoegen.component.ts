import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent {
  productToevoegenForm = this.fb.group({
    naam: ['', Validators.required],
    aantal: ['', Validators.required],
    prijs: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private ps: ProductsService) { }

  onSubmit() {
    this.ps.addItem(new Product(this.productToevoegenForm.value.naam, this.productToevoegenForm.value.aantal, this.productToevoegenForm.value.prijs));

    //De simpele manier:
    // let x:Product = this.productToevoegenForm.value;
    // this.ps.addItem(x);
  }

}
