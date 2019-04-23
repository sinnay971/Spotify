import { Component, OnInit } from '@angular/core';
import {ManagePlaylistService} from '../manage-playlist.service';
import {Track} from '../track';
import {SpotifyService} from '../spotify.service';
import {Playlist} from '../playlist';
import {CurrentUser} from '../CurrentUser';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {DialoguePickerComponent} from '../dialogue-picker/dialogue-picker.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  myPlaylist: Track[] = [];
  mesPlaylist = null;
  myProfil: CurrentUser = null;
  isprivate = false;


  animal: string;
  name: string;
  constructor(private route: ActivatedRoute, private playlist: ManagePlaylistService, private spotService: SpotifyService, private dialog: MatDialog) { }

  ngOnInit() {

    // this.getPlaylist();
    //  this.createPlaylist('myplaylist1', 'test1' , false);
    //  prendre les info user et display a l'écran
    // 	https://api.spotify.com/v1/me
    this.getProfile();
    //this.openDialog();


  }

  getPlaylist() {
    this.myPlaylist = this.playlist.getMusic();
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '0',
      left: '0'
    };

    this.dialog.open(DialoguePickerComponent, dialogConfig);
    const dialogRef = this.dialog.open(DialoguePickerComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

  getProfile() {
    this.spotService.getMyProfile().subscribe((profil) => {
      // @ts-ignore
      this.myProfil = profil;
      // this.createPlaylist(this.myProfil.id, 'myplaylist1', 'myPlaylistTracks' , false);
      this.getUserPlaylist(this.myProfil.id);
      console.log(this.myProfil.id);
    });
  }

  create(name: string, description: string) {
    this.spotService.createPlaylist(new Playlist(name, description, this.isprivate), this.myProfil.id).subscribe((create) => console.log((create)));
    location.reload();
  }

  getUserPlaylist(idUser: string) {
    return this.spotService.getUserPlaylist(idUser).subscribe((listPlay) => this.mesPlaylist = listPlay['items']);
  }

}
