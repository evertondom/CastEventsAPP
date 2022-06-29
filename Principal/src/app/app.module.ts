import { CompraComponent } from './telas/compra/compra.component';
import { UsersService } from './users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { CardComponent } from './card/card.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { LoginComponent } from './telas/login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjudaComponent } from './ajuda/ajuda.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CriarEventoComponent } from './criar-evento/criar-evento.component';
import { FormComponent } from './telas/cadastro/form/form.component';
import { FormEventoComponent } from './criar-evento/form-evento/form-evento.component';



@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    NavbarComponent,
    LocalizacaoComponent,
    CardComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    AjudaComponent,
    SobreNosComponent,
    CompraComponent,
    CriarEventoComponent,
    FormComponent,
    FormEventoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [HttpClientModule, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
