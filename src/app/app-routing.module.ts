import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { LogRegWrapperComponent } from './components/auth/log-reg-wrapper/log-reg-wrapper.component';
import { AlluserComponent } from './pages/alluser/alluser.component';
import { AuthorComponent } from './pages/author/author.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { CustomerViewComponent } from './pages/browse/customer-view/customer-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/browser', pathMatch: 'full'},
  {path: 'browser', component:BrowseComponent},
  {path: 'log-reg', component:LogRegWrapperComponent},
  {path: 'author', component:AuthorComponent},
  {path: 'users', component:AlluserComponent},
  {path: 'addCar', component:AddItemComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'addItem', component:AddItemComponent},
  {path: 'browser/:sellCarId/view', component:CustomerViewComponent},
  {path: '**', redirectTo: '/browser', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
