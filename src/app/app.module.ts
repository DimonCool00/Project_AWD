import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { GaleryComponent } from './galery/galery.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import {RouterModule, ROUTES} from '@angular/router';
import {MoneyConverterPipe} from './pipes/money-converter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/users.service';
import {LoggingService} from './services/logging.service';
import {RoomsService} from './services/rooms.service';
import {ExitGuard} from './guards/exit.guard';
import {StopGuard} from './guards/stop.guard';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    GaleryComponent,
    LoginComponent,
    RoomsComponent,
    RegistrationComponent,
    RoomdetailComponent,
    MoneyConverterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, LoggingService, RoomsService, ExitGuard, StopGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
