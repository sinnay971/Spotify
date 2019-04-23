import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import {Playlist} from './playlist';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyPlaylist = 'https://api.spotify.com/v1/playlists';
  private userProfile = 'https://api.spotify.com/v1/me';
  private token = 'BQATExKp6k-d7USIgDsRMvk-aqujDC72OZxpoESlcpLCDSji8yHfCF5wP-5vzBUgi04R7Y1T0duGSm2ZwuXBPQfTk0H7HrpSfUAlufau7tZ4OZ4OCf_Eqj1BLBXcz6-5c2B1PVnrVI3ulqDJXXb9k-K-uyqX8SGxUj9d9IS18yWBe-uTV0HEfS86MwZDOpBAcgFmA8tP6ubHHDlYzcaeNVSXlILF2XzhtPnTrb7_ZoDCL4wGnXnjhrQg6W2j8N9dCg';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + this.token});
  constructor(private http: HttpClient) { }

  getAlbums(mot: string) {
    return this.http.get(this.spotifyUrlSearchAlbum + mot, { headers : this.headers}); }

  getChanteur(mot: string) {
    return this.http.get(this.spotifyUrlSearchChanteur + mot, { headers : this.headers}); }

  getAlbum(id: string) {
    return this.http.get(this.spotifyUrlAlbum + id, { headers : this.headers}); }

  getMyProfile() {
    return this.http.get(this.userProfile, { headers : this.headers});
  }

  getUserPlaylist(user_id: string) {
    const url = 'https://api.spotify.com/v1/users/' + user_id + '/playlists';
    return this.http.get(url,  { headers : this.headers});
  }

  getPlaylist(idPlaylist: string) {
    const url = 'https://api.spotify.com/v1/playlists/' + idPlaylist;
    return this.http.get(url, { headers : this.headers});
  }

  createPlaylist(playlist: Playlist, userid: string) {
    const url = 'https://api.spotify.com/v1/users/' + userid + '/playlists';
    return this.http.post<Playlist>(url, playlist , { headers : this.headers}); }

  addTracktoPlayListe(idplayliste: string, uri: string) {
    const url = 'https://api.spotify.com/v1/playlists/' + idplayliste + '/tracks';
    return this.http.post(url, {'uris': uri}, { headers : this.headers});
  }

  deleteTracksFromPlaylist(id_playlist: string, uri: string, pos: number) {
    const url = 'https://api.spotify.com/v1/playlists/' + id_playlist + '/tracks';
    // @ts-ignore
    return this.http.delete(url, {'tracks': [{'uri': uri, 'positions': [ pos ] }]}, { headers : this.headers});
  }

  ReorderTrackFromPlaylist(id: string, indexStart: number, beforeIndex: number ) {
    const  url = 'https://api.spotify.com/v1/playlists/' + id + '/tracks';
    return this.http.put(url, {'range_start': indexStart, 'insert_before': beforeIndex}, { headers : this.headers});
  }
}
//spotify:track:3AYFNoXF0xw5Shsg0lHvBn
