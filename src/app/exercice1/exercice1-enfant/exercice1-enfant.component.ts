import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() private newCompteur: EventEmitter<number> = new EventEmitter();

  addCompteur() {
    this.compteur += 1;
    this.newCompteur.emit(this.compteur);
  }
  delCompteur() {
    this.compteur -= 1;
    this.newCompteur.emit(this.compteur);
  }
  constructor() {}

  ngOnInit() {}
}
