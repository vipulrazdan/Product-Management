import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

    export class ProductListComponent implements OnInit  {
    
    errorMessage:any
    
    private _listFilter: string = '';
    
    

    filteredProducts: IProduct[]= [];
    productlist: IProduct[] = [];

      constructor(private productService: ProductService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

     
      
      ngOnInIt(): void {
           this.productService.getProducts().subscribe({
          next: products => {
            this.productlist = products;
            debugger
            
          },
          error: err => this.errorMessage = err
        });
        
      
      }

   

     
    
}