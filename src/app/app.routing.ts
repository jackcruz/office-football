import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'game', component: GameComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, LoginComponent, GameComponent];
