import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

  constructor(private spotService: SpotifyService) { }
  chanteurs: Item[] = [];

  ngOnInit() {
    this.chercherChanteur('tupac');
  }

  chercherChanteur(nom: string) {
    this.spotService.getChanteur(nom).subscribe((res) => {
      this.chanteurs = res['artists']['items'];
      console.log(this.chanteurs);
    });
  }

}
