import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  users: User[];



  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    this.usersService.PegarTodos().subscribe(resultado => {
      this.users = resultado;
    })
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
