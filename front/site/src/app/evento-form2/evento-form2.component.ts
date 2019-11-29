import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventosService } from './eventos.service';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-evento-form2',
  templateUrl: './evento-form2.component.html',
  styleUrls: ['./evento-form2.component.css']
})
export class EventoForm2Component implements OnInit {

  form: FormGroup;
  submitted = false;
  public mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/];
  public evento = {
    titulo: "",
    imagem: "",
    link: "",
    categId: 0,
    descricao: "",
    acc: false,
    dataInicial: "",
    dataFinal: "",
  }

  zerarCampos(){

     this.evento = {
      titulo: "",
      imagem: "",
      link: "",
      categId: 0,
      descricao: "",
      acc: false,
      dataInicial: "",
      dataFinal: "",
    }

  }



  constructor(private service: EventosService, private modal: AlertModalService) { }



  ngOnInit() {

  }

  formatDate(dateStr) {
    const [day, month, year] = dateStr.split("/")
    return new Date(year, month - 1, day)

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    let msgSuccess = 'Evento criado com sucesso!';
    let msgError = 'Erro ao criar evento, tente novamente!';

    console.log('SUBMIT')
    this.service.create(this.evento).subscribe(
      success => {
        this.modal.showAlertSuccess(msgSuccess)
        this.zerarCampos();
      },
      error => this.modal.showAlertDanger(msgError),
      () => console.log('request OK')
    );


  }

  validateDataEvento() {
    console.log(this.evento);

    for (var index in this.evento) {
      if (this.evento[index] == null || this.evento[index] == "" || this.evento[index] == undefined) {
        if (this.evento.dataFinal == null || this.evento.dataFinal == "" || this.evento.dataFinal == undefined) {

        } else {
          console.log(index)
          this.modal.showAlertDanger('Preencha todos os campos!')
          return;
        }

      }
    }

    try {

      let aux = this.formatDate(this.evento.dataInicial);
      // console.log(aux)
      this.evento.dataInicial = "" + aux.getTime();
      // console.log(this.evento.dataInicial)
      // console.log(aux.getTime())
      if(this.evento.dataFinal != ""){
        let aux = this.formatDate(this.evento.dataFinal);
      // console.log(aux)
      // console.log(aux.getTime())

      this.evento.dataFinal = "" + aux.getTime();
      // console.log(this.evento.dataFinal)
      }
      
      this.onSubmit();
    } catch (error) {
      this.modal.showAlertDanger('Preencha todos os campos corretamente!')
    }
  }

  onCancel() {
    this.submitted = false;
    this.zerarCampos();
    //zerar campos
  }

}