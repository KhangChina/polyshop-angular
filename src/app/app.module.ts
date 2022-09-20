import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductModifyComponent } from './components/product-modify/product-modify.component';
import { AdminRoutes } from './routers/admin.routing';

const router: Routes =[
  {path:'productlist',component:ProductListComponent},
  {path:'productdetail/:id',component:ProductModifyComponent},
  {path:'',pathMatch:'full',redirectTo:'productlist'},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductModifyComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    AdminRoutes,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
