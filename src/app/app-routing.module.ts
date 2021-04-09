import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { GaleryComponent } from './galery/galery.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import {ExitGuard} from './guards/exit.guard';
import {StopGuard} from './guards/stop.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [StopGuard], canDeactivate: [ExitGuard]},
  { path: 'registration', component: RegistrationComponent, canDeactivate: [ExitGuard]},
  { path: 'rooms', component: RoomsComponent,
    children: [
      { path: 'details/:id', component: RoomdetailComponent
      }
    ]
  },
  { path: 'home', component: IndexComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
