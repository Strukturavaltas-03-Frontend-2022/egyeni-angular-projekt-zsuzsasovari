import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditComponent } from './page/data-edit/data-edit.component';
import { HomeComponent } from './page/home/home.component';
import { InfoComponent } from './page/info/info.component';
import { WelcomeComponent } from './page/welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'dataedit/:id',
    component:DataEditComponent,
  },
  {
    path: 'dataedit/new',
    component: DataEditComponent,
  },
  {
    path: '#',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
