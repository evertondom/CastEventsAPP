import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  dadosShow = [
    {
     nomeShow: 'Nome do Show', 
     dataShow: '22/06/2022, 19:00',
     localShow: 'Teatro Luis Mendonça (Boa Viagem, PE)',
     valorShow: 'A partir de R$40,00',
     url:'https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      nomeShow: 'Nome do Show', 
      dataShow: '22/06/2022, 19:00',
      localShow: 'Teatro Luis Mendonça (Boa Viagem, PE)',
      valorShow: 'A partir de R$40,00',
      url:'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      nomeShow: 'Nome do Show', 
      dataShow: '22/06/2022, 19:00',
      localShow: 'Teatro Luis Mendonça (Boa Viagem, PE)',
      valorShow: 'A partir de R$40,00',
      url:'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      nomeShow: 'Nome do Show', 
      dataShow: '22/06/2022, 19:00',
      localShow: 'Teatro Luis Mendonça (Boa Viagem, PE)',
      valorShow: 'A partir de R$40,00',
      url:'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      nomeShow: 'Nome do Show', 
      dataShow: '22/06/2022, 19:00',
      localShow: 'Teatro Luis Mendonça (Boa Viagem, PE)',
      valorShow: 'A partir de R$40,00',
      url:'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
