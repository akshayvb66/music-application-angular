import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { AddService } from './add.service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AddwishlistComponent } from './addwishlist/addwishlist.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes:Routes=[
  // { path:'search',component: SearchComponent},
  { path:'show',component:WishlistComponent},
  { path:'searchtrack/:find',component:SearchComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WishlistComponent,
    UpdateComponent,
    NavbarComponent,
    SearchbarComponent,
    AddwishlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
