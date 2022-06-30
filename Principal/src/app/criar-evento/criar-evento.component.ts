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
  eventosFiltrados: any = [];

  private _filtroLista: string = '';

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {

    this.eventosService.RecuperaTodos().subscribe(resultado => {
      this.eventos = resultado;
    });
  }

  public get filtroLista(){
    return this._filtroLista
  }

  public set filtroLista(value: string){
   this._filtroLista = value;
   this.eventosFiltrados = this.filtroLista ? this.filtrarCursos(this.filtroLista) : this.eventos;
 }

 filtrarCursos(filtrarPor: string): any{
   filtrarPor = filtrarPor.toLocaleLowerCase();
   return this.eventos.filter(
     (eventos: {nome:string;descricao:string}) => eventos.nome.toLocaleLowerCase().indexOf(filtrarPor)!== -1 ||
     eventos.descricao.toLocaleLowerCase().indexOf(filtrarPor)!== -1
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
