import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: LocationComponent },
  { path: 'dia-chi', component: LocationComponent },
  { path: 'thuc-don', component: MenuComponent },
  { path: 'thuc-don/danh-sach-mon-an', component:  MenuListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
