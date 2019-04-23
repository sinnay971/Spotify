import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {Item} from '../item';

@Component({
  selector: 'app-listealbum',
  templateUrl: './listealbum.component.html',
  styleUrls: ['./listealbum.component.css']
})
export class ListealbumComponent implements OnInit {

  constructor(private spotService: SpotifyService) { }
  albums: Item[] = [];

  ngOnInit() {
    this.chercherAlbum('tupac' );
  }

  public chercherAlbum(nom: string) {
    return this.spotService.getAlbums(nom).subscribe((res) => {
      this.albums = res['albums']['items'];
      console.log(this.albums );
    });
  }

}
