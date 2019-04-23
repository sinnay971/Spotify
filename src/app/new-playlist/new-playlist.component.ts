import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../spotify.service';
import {Playlist} from '../playlist';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.css']
})
export class NewPlaylistComponent implements OnInit {

  isprivate = false;
  idUser: string;

  constructor(private route: ActivatedRoute, private router: Router, private spotify: SpotifyService) { }

  ngOnInit() {
    this.idUser = this.route.snapshot.params['id'];
  }

  create(name: string, description: string) {
    this.spotify.createPlaylist(new Playlist(name, description, this.isprivate), this.idUser).subscribe();
    this.router.navigateByUrl('/playlist');
  }

}

