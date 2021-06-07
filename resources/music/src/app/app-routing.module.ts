import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusicDetailsComponent} from './modules/music-details/music-details/music-details.component';
import {AddNewMusicComponent} from './modules/add-new-music/add-new-music/add-new-music.component';
import {MusicListComponent} from './modules/music-list/music-list/music-list.component';
import {UpdateMusicComponent} from "./modules/update-music/update-music/update-music.component";

const routes: Routes = [
  {
    path: '', redirectTo: '/music', pathMatch: 'full'
  },
  {
    path: 'music',
    component: MusicListComponent
  },
  {
    path: 'music-details/:id',
    component: MusicDetailsComponent
  },
  {
    path: 'update-music/:id',
    component: UpdateMusicComponent
  },
  {
    path: 'add-music',
    component: AddNewMusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
