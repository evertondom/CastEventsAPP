import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Evento } from '../Evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})

export class CriarEventoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string;

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Cadastro de Eventos';

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      capacidadeTotal: new FormControl(null),
      imagemUrl: new FormControl(null),
      data: new FormControl(null),
      descricao: new FormControl(null),
      valorIngresso: new FormControl(null)
    })
  }

  EnviarFormulario(): void {
    const evento: Evento = this.formulario.value;

    this.eventosService.CriaEvento(evento).subscribe(
      (resultado) => { alert('Evento cadstrado com sucesso!') }
    );
  }
}
