import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

import { Agendamento } from "../../domain/agendamento/agendamento";
import { AgendamentoDao } from "../../domain/agendamento/agendamento-dao";

@Injectable()
export class AgendamentoService {

    constructor(
        private _http: Http,
        private _dao: AgendamentoDao
    ) {}

    agenda(agendamento: Agendamento) {
        
        console.log('agenda', agendamento);
        let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
        return this._dao
            .ehAgendamentoDuplicado(agendamento)
            .then(duplicado => {
                if (duplicado) throw new Error('Este agendamento já foi realizado. Verifique.');
                return this._http.get(api).toPromise()
                    .then(() => agendamento.confirmado = true, err => console.log(err))
                    .then(() => this._dao.salva(agendamento))
                    .then(() => agendamento.confirmado);    
            });
    }    
}
