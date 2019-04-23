import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import {Track} from '../track';
import {ManagePlaylistService} from '../manage-playlist.service';

@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})
export class DetailalbumComponent implements OnInit {

  idalbum: string;
  album: Track[] = [];
  displayedColumns: string[] = ['name', 'track', 'favoris'];
  constructor(private route: ActivatedRoute, private spotService: SpotifyService, private  playlistService: ManagePlaylistService) { }

  ngOnInit() {
    this.idalbum = this.route.snapshot.params['id'];
    console.log(this.idalbum);
    this.getAlbum(this.idalbum);
  }

  getAlbum(id: string) {
    this.spotService.getAlbum(id).subscribe((res) =>
      this.album = res['tracks']['items']
    );
  }
  addToPlaylist(track: Track) {
    this.playlistService.addTrack(track);
  }

}
