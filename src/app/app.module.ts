import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    
    ProductListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      
      { path: 'products', component: ProductListComponent },
     

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
