import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // Propriétés personnalisées
  // Ce décorateur, en effet, crée une propriété  appareilName
  // qu'on peut fixer depuis la balise  <app-appareil>  :

  @Input() appareilName: string;


  // String interpolation
  // les informations venant du code qui doivent être affichées dans le HTML
  // on peut afficher des réponses de fonctions et des variables {{ getStatus() }} {{ appareilStatus }}
  appareilStatus = 'éteint';

  constructor() { }

  ngOnInit() {
  }

  getStatus(): string {
    return this.appareilStatus;
  }
}
