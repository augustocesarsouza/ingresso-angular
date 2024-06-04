import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrl: './campo-control-erro.component.scss'
})
export class CampoControlErroComponent implements OnInit {
  @Input() mostrarError: boolean = false;
  @Input() nomeError: string = '';

  constructor(){
  }

  ngOnInit(): void {
  }
}
