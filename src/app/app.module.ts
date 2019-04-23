import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { SpotifyService } from './spotify.service';

import { AppComponent } from './app.component';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';

import {MatExpansionModule, MatGridListModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {ManagePlaylistService} from './manage-playlist.service';
import { MatDialogModule } from '@angular/material';
import { NewPlaylistComponent } from './new-playlist/new-playlist.component';
import { SelectedPlaylistComponent } from './selected-playlist/selected-playlist.component';
import { DialoguePickerComponent } from './dialogue-picker/dialogue-picker.component';
import { PlaylistPickerComponent } from './playlist-picker/playlist-picker.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    ListealbumComponent,
    AccueilComponent,
    ListechanteursComponent,
    DetailalbumComponent,
    ConnexionComponent,
    PlaylistComponent,
    NewPlaylistComponent,
    SelectedPlaylistComponent,
    DialoguePickerComponent,
    PlaylistPickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SpotifyService,
    ManagePlaylistService],
  bootstrap: [AppComponent],
  entryComponents: [DialoguePickerComponent]
})
export class AppModule {}
