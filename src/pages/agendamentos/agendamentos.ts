import { Component } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { Agendamento } from "../../domain/agendamento/agendamento";
import { AgendamentoDao } from "../../domain/agendamento/agendamento-dao";

@Component({
    selector: 'page-agendamentos',
    templateUrl: 'agendamentos.html'
})
export class AgendamentosPage {

    public agendamentos: Agendamento[];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _agendamentoDao: AgendamentoDao
    ) {
        this._agendamentoDao
            .listaTodos()
            .then(agendamentos => this.agendamentos = agendamentos);
    }
}