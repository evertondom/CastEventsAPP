import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  users: User[]
  usersFiltrados: any = []

  private _filtroLista: string = ''

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    this.usersService.PegarTodos().subscribe(resultado => {
      this.users = resultado;
    })
  }

  public get filtroLista(){
    return this._filtroLista
  }

  public set filtroLista(value: string){
   this._filtroLista = value;
   this.usersFiltrados = this.filtroLista ? this.filtrarCursos(this.filtroLista) : this.users;
 }

 filtrarCursos(filtrarPor: string): any{
   filtrarPor = filtrarPor.toLocaleLowerCase();
   return this.users.filter(
     (users: {nome:string;email:string}) => users.nome.toLocaleLowerCase().indexOf(filtrarPor)!== -1 ||
     users.email.toLocaleLowerCase().indexOf(filtrarPor)!== -1
    );
 }

  ExcluirCadastro(userId) {
    this.usersService.ExcluirUser(userId).subscribe((resultado) =>{
      alert('Excluido com sucesso!')
      this.usersService.PegarTodos().subscribe(registros =>{
        this.users = registros
      })
    })
  }

  EditarCadastro(userId){

    this.usersService.AtualizarUser(userId).subscribe((resultado) =>{
      alert('Atualizado com sucesso!')
      this.usersService.PegarTodos().subscribe(registros =>{
        this.users = registros
      })
    })
  }
}
