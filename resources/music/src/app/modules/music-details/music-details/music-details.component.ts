import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrl, Constants} from "../../../common/constants";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
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

  confirmation(id: number): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: `Are you sure you want to delete?`
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.httpClient.post(
          `${Constants.music}/delete/${id}`,
          {}
        ).subscribe((response: any) => {
          this.snackBar.open(response.message, '', {
            verticalPosition: 'top', duration: 4000
          });
          this.router.navigate(['/music']);
        }, (error: any) => {
          console.log(error);
        });
      }
    })
  }
}
