import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService),
  ],
  providers: [ProductService]
})
export class ProductsModule { }
