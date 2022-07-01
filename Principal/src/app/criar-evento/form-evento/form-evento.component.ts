import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Evento } from '../../Evento';
import { EventosService } from '../../eventos.service';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;
  eventos: Evento[];

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
    });
  }

  EnviarFormulario(): void {
    const evento: Evento = this.formulario.value;

    this.eventosService.CriaEvento(evento).subscribe(
      (resultado) => { alert('Evento cadastrado com sucesso!') }
    );
  }

}
