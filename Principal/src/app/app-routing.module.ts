import { FormEventoComponent } from './criar-evento/form-evento/form-evento.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './telas/compra/compra.component';
import { FormComponent } from './telas/cadastro/form/form.component';
import { CriarEventoComponent } from './criar-evento/criar-evento.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ajuda', component: AjudaComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'compra', component: CompraComponent},
  {path: 'form', component: FormComponent},
  {path: 'criar-evento', component: CriarEventoComponent},
  {path: 'form-evento', component: FormEventoComponent}
  {path: 'compra/evento', component: CompraComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
