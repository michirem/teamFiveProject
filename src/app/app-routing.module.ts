import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:"", component: HomeComponent
}, {
  path:"gallery", component: GalleryComponent
}, {
  path:"about", component: AboutComponent
}, {
  path:"contact", component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
