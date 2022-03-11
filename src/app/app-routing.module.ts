import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { MainComponent } from './views/main/main.component';
import { NewsComponent } from './views/news/news.component';
import { ShopComponent } from './views/shop/shop.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
