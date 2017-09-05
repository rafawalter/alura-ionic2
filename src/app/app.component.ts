import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {

  @ViewChild(Nav) public nav: Nav;

  rootPage = HomePage;

  public paginas = [
    {titulo: 'Agendamentos', componente: AgendamentosPage }
  ];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  abrePagina(pagina): void {

    this.nav.push(pagina.componente);
  }
}
