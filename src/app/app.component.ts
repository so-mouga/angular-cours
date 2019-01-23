import { Component } from '@angular/core';

// @Component() est un décorateur
@Component({
  selector: 'app-root', /* id du composant il est ustilisé coté HTML pour afficher le composant*/
  templateUrl: './app.component.html', /* le chemin vers le code HTML à injecter */
  styleUrls: ['./app.component.scss'] /* un array contenant un ou plusieurs chemins vers les feuilles de styles */
})
export class AppComponent {
  isAuth = false;
  toto = 0;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

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
