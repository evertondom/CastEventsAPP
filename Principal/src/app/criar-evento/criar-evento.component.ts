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
  eventos: Evento[];

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Cadastro de Eventos';

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      ingressosDisponiveis: new FormControl(null),
      imagemUrl: new FormControl(null),
      data: new FormControl(null),
      descricao: new FormControl(null),
      valorIngresso: new FormControl(null)
    });

    this.eventosService.RecuperaTodos().subscribe(resultado => {
      this.eventos = resultado;
    });
  }

  EnviarFormulario(): void {
    const evento: Evento = this.formulario.value;

    this.eventosService.CriaEvento(evento).subscribe(
      (resultado) => { alert('Evento cadstrado com sucesso!') }
    );
  }

  EditaEvento(eventoId): void {
    this.eventosService.RecuperaPeloId(eventoId).subscribe(evento => {
      this.tituloFormulario = `Atualizar ${evento.nome}`;

      this.formulario = new FormGroup({
        nome: new FormControl(evento.nome),
        capacidadeTotal: new FormControl(evento.ingressosDisponiveis),
        imagemUrl: new FormControl(evento.imagemUrl),
        data: new FormControl(evento.data),
        descricao: new FormControl(evento.descricao),
        valorIngresso: new FormControl(evento.valorIngresso)
      })
    })
  }

    ExcluiEvento(eventoId)  {
      this.eventosService.ExcluiEvento(eventoId).subscribe((resultado) => {
        alert('excluido com sucesso');
        this.eventosService.RecuperaTodos().subscribe(registros => {
          this.eventos = registros;
        });
      })
    }
}
