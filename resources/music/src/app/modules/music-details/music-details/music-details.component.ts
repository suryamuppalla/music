import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrl, Constants} from "../../../common/constants";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {

  public music: any = {};
  public baseUrl = BaseUrl;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.musicDetails(params.id);
    });
  }

  ngOnInit(): void {
  }

  musicDetails(musicId: string): void {
    this.httpClient.get(`${Constants.music}/${musicId}`)
      .subscribe((response: any) => {
        if (response && response.length > 0) {
          this.music = response[0];
        }
      });
  }
}
