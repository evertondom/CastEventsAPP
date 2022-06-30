import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/eventos.service';
import { Evento } from 'src/app/Evento';
import { Ingresso } from 'src/app/Ingresso';
import { IngressosService } from 'src/app/ingressos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  id: number;
  evento: Evento;
  formulario: any;
  formularioEvento: any;
  tituloFormulario: string;

  constructor(private route: ActivatedRoute, private eventosService: EventosService, private ingressosService: IngressosService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
      }
      );

    this.eventosService.RecuperaPeloId(this.id).subscribe(resultado => {
      this.evento = resultado;
    });

    this.formulario = new FormGroup({
      eventoId: new FormControl(this.id),
      quantidadeIngresso: new FormControl(null)
    });


  }

  EnviaFormulario(): void {
    const ingresso: Ingresso = this.formulario.value;

    if (ingresso.quantidadeIngresso > this.evento.ingressosDisponiveis) {
      alert('Quantidade indisponível no momento.');
      return;
    }

    console.log(this.evento);
    this.evento.ingressosDisponiveis -= ingresso.quantidadeIngresso;
    console.log(this.evento);
    this.eventosService.AtualizaEvento(this.evento.id, this.evento).subscribe(resultado => {
      alert('Será que vai?');
    });

    this.ingressosService.CriaIngresso(ingresso).subscribe(
      (resultado) => { alert('Ingresso comprado') }
    );
  }
}
