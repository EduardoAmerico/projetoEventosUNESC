import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  // {path: 'cursos', 
  //   loadChildren: './cursos/cursos.module#CursosModule',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [CursosGuard]
  // },
  // {path: 'alunos', 
  //   loadChildren: './alunos/alunos.module#AlunosModule',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AursosGuard]
  // },

  {
    path: '', component: HomeComponent,
  },
  {
    path:'eventos', loadChildren: './eventos/eventos.module#EventosModule'
  },
  {path: 'login', component: LoginComponent
  },
  {path: 'agenda', component: AgendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
