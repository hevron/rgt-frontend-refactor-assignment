import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './views/about/about.component';
import { NewsComponent } from './views/news/news.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { NavComponent } from './components/buttons/nav/nav.component';
import { SubmitComponent } from './components/buttons/submit/submit.component';
import { CartComponent } from './components/buttons/cart/cart.component';
import { ShopComponent } from './views/shop/shop.component';
import { ContactBtnComponent } from './components/buttons/contact-btn/contact-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    NavComponent,
    SubmitComponent,
    CartComponent,
    ShopComponent,
    ContactBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
