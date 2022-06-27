import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ajuda', component: AjudaComponent},
  {path: 'sobre-nos', component: SobreNosComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
