import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BaseUrl, Constants} from "../../../common/constants";
import {FormControl, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  public isLoading = false;
  public musics: any[] = [];
  public search = new FormControl(null);
  public baseUrl = BaseUrl;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getBooks('');

    this.search
      .valueChanges
      .pipe(debounceTime(500))
      .subscribe(search => {
        this.getBooks(search);
      });
  }

  getBooks(search: string): void {
    this.isLoading = true;
    let httpParams = new HttpParams();
    if (search) {
      httpParams = httpParams.append('searchText', search);
    }
    this.httpClient.get(Constants.music, {
      params: httpParams
    }).subscribe((response: any) => {
      setTimeout(() => {
        this.isLoading = false;
        this.musics = response;
      }, 1500);
    }, () => {
      this.isLoading = false;
    });
  }
}
