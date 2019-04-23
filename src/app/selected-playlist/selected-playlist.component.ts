import { Component, OnInit } from '@angular/core';
import {Track} from '../track';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-selected-playlist',
  templateUrl: './selected-playlist.component.html',
  styleUrls: ['./selected-playlist.component.css']
})
export class SelectedPlaylistComponent implements OnInit {

  album: Track[] = [];
  listFav = null;
  idPlaylist: string;
  displayedColumns: string[] = ['name', 'track', 'delete'];
  constructor(private route: ActivatedRoute, private spotService: SpotifyService) { }

  ngOnInit() {
    this.idPlaylist = this.route.snapshot.params['id'];
    this.getPlaylist();
  }

  getPlaylist() {
    this.spotService.getPlaylist(this.idPlaylist).subscribe((tracks) => {  this.listFav = tracks['tracks']['items'];
     } );
  }

  getTrack(index: number) {
    return this.listFav['' + index + '']['track'];
  }

}
