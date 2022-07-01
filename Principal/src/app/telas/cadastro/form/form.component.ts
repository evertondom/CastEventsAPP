import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: any;
  tituloFormulario!: string;
  users: User[];

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
      console.log(user);
      console.log(user.nome);

      this.usersService.SalvarUser(user)
      .subscribe(
        (resultado) =>{ alert('pessoa inserida com sucesso')
      });

    }

}
