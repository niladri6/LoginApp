import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(RegisterPage),
  ]
})
export class RegisterPageModule {}
