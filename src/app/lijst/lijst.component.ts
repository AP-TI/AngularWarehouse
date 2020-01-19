import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {

  producten: Product[];

  constructor(private ps: ProductsService) {   }

  ngOnInit() : void{
    this.ps.getAllItems()
         .subscribe(data => { this.producten = data; }, error => { console.error(error); });
    // this.ps.getAllItems().then(json => this.producten = json);
  }

}
