import { Component } from '@angular/core';

// @Component() est un décorateur
@Component({
  selector: 'app-root', /* id du composant il est ustilisé coté HTML pour afficher le composant*/
  templateUrl: './app.component.html', /* le chemin vers le code HTML à injecter */
  styleUrls: ['./app.component.scss'] /* un array contenant un ou plusieurs chemins vers les feuilles de styles */
})
export class AppComponent {
  title = 'mo-toto';
}
