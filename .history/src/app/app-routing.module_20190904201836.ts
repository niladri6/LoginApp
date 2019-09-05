import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'registeration', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'recovery', loadChildren: './recovery/recovery.module#RecoveryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
