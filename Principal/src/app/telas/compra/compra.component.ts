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
  valorTotal: number = 0.00;

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

    if (ingresso.quantidadeIngresso > this.evento.ingressosDisponiveis || ingresso.quantidadeIngresso == 0) {
      alert('Quantidade indisponível no momento.');
      return;
    }

    this.valorTotal = ingresso.quantidadeIngresso * this.evento.valorIngresso;


    this.evento.ingressosDisponiveis -= ingresso.quantidadeIngresso;
    this.eventosService.AtualizaEvento(this.evento.id, this.evento).subscribe(resultado => {
      console.log('Será que vai?');
    });

    this.ingressosService.CriaIngresso(ingresso).subscribe(
      (resultado) => { console.log('Ingresso comprado') }
    );
  }
}
