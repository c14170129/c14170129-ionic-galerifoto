import { Component } from '@angular/core';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loser: boolean = true;
  winner: boolean = false;
  luckyNumber: number;
  inputNumber: number;

  constructor(public fotoService:FotoService) {}
  
  async ngOnInit() {
    // await this.fotoService.loadFoto()
    this.luckyNumber = Math.floor(Math.random() * 4 + 1)
  }

  checkWin(event: any) {
    this.inputNumber = Number(event.target.value)
    if (this.inputNumber == this.luckyNumber) {
      this.loser = false
      this.winner = true
    } else {
      this.loser = true
      this.winner = false
    }
  }

  tambahFoto() {
    this.fotoService.tambahFoto()
  }
}
