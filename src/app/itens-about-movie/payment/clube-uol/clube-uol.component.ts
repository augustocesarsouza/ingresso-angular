import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clube-uol',
  templateUrl: './clube-uol.component.html',
  styleUrl: './clube-uol.component.scss'
})
export class ClubeUolComponent implements OnInit {
  rotateClubeUol = "180";

  constructor(){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      import('inputmask').then(Inputmask => {
        let inputNumberCpfCnpj = document.getElementById('input-number-cpf-cnpj');

        if (inputNumberCpfCnpj) {
          const mask = new Inputmask.default({
            mask: [
              "999.999.999-99",
              "99.999.999/9999-99"
            ],
            definitions: {
              '9': {
                validator: "[0-9]",
                cardinality: 1
              }
            },
            keepStatic: true
          });
          mask.mask(inputNumberCpfCnpj);
        }
      });
    };
  }

  onClickContainerImgClubeMain(){
    if(this.rotateClubeUol === "180"){
      this.rotateClubeUol = "0";
    }else if(this.rotateClubeUol === "0"){
      this.rotateClubeUol = "180";
    }
  }
  onChangeInputCpfCnpj(inputCpfCnpj: HTMLInputElement){
    const valueInput = inputCpfCnpj.value.replace(/[_\-./]/g, '');
  }
}
