import { Component } from '@angular/core';

// @Component() est un décorateur
@Component({
  selector: 'app-root', /* id du composant il est ustilisé coté HTML pour afficher le composant*/
  templateUrl: './app.component.html', /* le chemin vers le code HTML à injecter */
  styleUrls: ['./app.component.scss'] /* un array contenant un ou plusieurs chemins vers les feuilles de styles */
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  toto = 0;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);

    const test = setInterval(() => {
      if (2 ===  this.toto) {
        clearInterval(test);
      }
      this.toto += 1;
    }, 1000);
  }

  onAllumer(): void {
    console.log('On allume tout !');
  }
}
