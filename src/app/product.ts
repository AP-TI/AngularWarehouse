import { HttpParams } from '@angular/common/http';

export class Product {

   constructor(public naam: string,
      public prijs: string,
      public aantal: string){ }

   getParams(): HttpParams {
      return new HttpParams()
         .set('name', this.naam)
         .set('prijs', this.prijs)
         .set('aantal', this.aantal);
   }
}
