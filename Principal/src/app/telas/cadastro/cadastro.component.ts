import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/User';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  formulario: any;
  tituloFormulario!: string;


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Cadastre-se';

    this.formulario = new FormGroup({
      email: new FormControl(null),
      senha: new FormControl(null),
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      cpf: new FormControl(null),
      dataNascimento: new FormControl(null),
      telefone: new FormControl(null)
    });
  }

  EnviarFormulario(): void{

    const user: User = this.formulario.value;

    this.usersService.SalvarUser(user)
    .subscribe(
      (resultado) =>{ alert('pessoa inserida com sucesso')
    });

  }
}
