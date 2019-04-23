import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../spotify.service';
import {Playlist} from '../playlist';
import {CurrentUser} from '../CurrentUser';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-playlist-picker',
  templateUrl: './playlist-picker.component.html',
  styleUrls: ['./playlist-picker.component.css']
})
export class PlaylistPickerComponent implements OnInit {

  listePlaylist = null;
  displayedColumns: string[] = ['name', 'favoris'];
  custom: Dictionary<boolean> = {};
  ids: string[];
  uri: string;
  myProfil: CurrentUser;

  constructor(private route: ActivatedRoute, private spotService: SpotifyService, private router: Router) { }

  ngOnInit() {

    this.uri = this.route.snapshot.params['id'];
    console.log(this.uri);
    this.getProfile();
  }

  ajouter() {
    const selected: string[] = [];
    for (const key of  Object.keys(this.custom)) {
         const value = this.custom[key];
         //console.log(key + ' ' + value);
         if (Boolean(value) === true) {
             selected.push(key);
           console.log(key + ' ' + value);
         }
    }
    for (const id of selected) {
      console.log(id);
      this.spotService.addTracktoPlayListe(id, this.uri).subscribe();
    }
    this.router.navigateByUrl('/albums');
  }

  getProfile() {
    this.spotService.getMyProfile().subscribe((profil) => {
      // @ts-ignore
      this.myProfil = profil;
      console.log('hooo');
      this.getUserPlaylist(this.myProfil.id);
      console.log(this.myProfil.id);
    });
  }

  getUserPlaylist(idUser: string) {
    return this.spotService.getUserPlaylist(idUser).subscribe((listPlay) => { this.listePlaylist = listPlay['items'];
    for (const item in listPlay) {
      console.log('item');
        this.custom[item['name']] = false;
    }});
  }
}

interface Dictionary<T> {
  [Key: string]: T;
}
