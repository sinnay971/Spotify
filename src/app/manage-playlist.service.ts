import { Injectable } from '@angular/core';
import {Track} from './track';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagePlaylistService {

  private listeDeTracks: Track[] = [];

  constructor() { }

  public getMusic(): Track[] {
    return this.listeDeTracks;
  }

  public addTrack(track: Track) {
    this.listeDeTracks.push(track);
  }

  public deleteProduit(mTracks: Track) {
    const indice = this.listeDeTracks.findIndex( track => track === mTracks);
    if (indice !== -1) {
      this.listeDeTracks.splice(indice);
    } else {
      return null;
    }
  }


}
