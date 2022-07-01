import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  formulario: any
  users: User[] = []
  tituloFormulario: string
  usersFiltrados: any = []

  visibilidadeFormulario: boolean = false;

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

  ExcluirCadastro(id: number) {
    this.usersService.ExcluirUser(id).subscribe((resultado) =>{
      alert('Excluido com sucesso!')
      this.usersService.PegarTodos().subscribe(registros =>{
        this.users = registros
      })
    })
  }

  EditarCadastro(userId){

    this.usersService.PegarPeloId(userId).subscribe(user => {
      this.tituloFormulario = `Atualizar ${user.nome}`;

      this.formulario = new FormGroup({
        id: new FormControl(user.id),
        email: new FormControl(user.email),
        senha: new FormControl(user.senha),
        nome: new FormControl(user.nome),
        sobrenome: new FormControl(user.sobrenome),
        cpf: new FormControl(user.cpf),
        dataNascimento: new FormControl(user.dataNascimento),
        telefone: new FormControl(user.telefone)
      })

      this.visibilidadeFormulario = true;
    });
  }
  EnviarFormularioEditado() {
    const user: User = this.formulario.value;

    this.usersService.AtualizarUser(user).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      alert('Atualizado com sucesso!')
      this.usersService.PegarTodos().subscribe(registros => {
        this.users = registros;
      });
    })
  }
  voltar(): void {
    this.visibilidadeFormulario = false;
  }
}
