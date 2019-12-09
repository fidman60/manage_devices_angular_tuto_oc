import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import AppareilService from "./services/appareil.service";
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import AuthService from "./services/auth.service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import AuthGuard from "./services/auth-guard";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import UserService from "./services/user.service";
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes:Routes = [
  {path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate:[AuthGuard], component: SingleAppareilComponent},
  {path: 'edit', canActivate:[AuthGuard], component: EditAppareilComponent},
  {path: 'users', canActivate: [AuthGuard], component: UserListComponent},
  {path: 'new-user', canActivate: [AuthGuard], component: NewUserComponent},
  {path: 'not_found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not_found'},
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
      AppareilService,
      AuthService,
      AuthGuard,
      UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
