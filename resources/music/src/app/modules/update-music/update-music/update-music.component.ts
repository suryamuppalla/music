import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseUrl, Constants} from "../../../common/constants";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-update-music',
  templateUrl: './update-music.component.html',
  styleUrls: ['./update-music.component.scss']
})
export class UpdateMusicComponent implements OnInit {
  public isLoading = false;
  public form: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    file: new FormControl(null),
    author: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    language: new FormControl(null, Validators.required)
  });
  public formData = new FormData();
  public music: any = {};
  public baseUrl = BaseUrl;

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.musicDetails(params.id);
      }
    })
  }

  ngOnInit(): void {
  }

  fileUpload(event: Event) {
    // @ts-ignore
    this.form.patchValue({file: event.target.files[0].name})
    // @ts-ignore
    this.formData.append('file', event.target.files[0]);
  }

  musicDetails(musicId: string): void {
    this.isLoading = true;
    this.httpClient.get(`${Constants.music}/${musicId}`)
      .subscribe((response: any) => {
        setTimeout(() =>{
          this.isLoading = false;
        }, 1000);
        if (response && response.length > 0) {
          this.music = response[0];
          this.form.patchValue(this.music);
          this.form.patchValue({file: ''});
        }
      });
  }

  uploadMusicFile(): void {
    if (this.form.valid) {
      this.dialog.open(ConfirmDialogComponent, {
        width: `450px`,
        data: {title: `Are you sure you want to update?`}
      }).afterClosed().subscribe(confirmed => {
        if (confirmed) {
          if (this.form.value.file) {
            this.isLoading = true;
            delete this.form.value.file;

            this.httpClient.post(
              Constants.musicFileUpload,
              this.formData
            ).subscribe((response: any) => {
              console.log(response);
              if (response && response.data) {
                this.addNewMusic(response.data);
              }
            });
          } else {
            this.addNewMusic(this.music.file);
          }
        }
      });
    }
  }

  public addNewMusic(file: string): void {
    const data = this.form.value;
    data.file = file;
    this.httpClient.post(
      `${Constants.music}/update/${this.music.id}`,
      data
    ).subscribe((response: any) => {
      this.snackBar.open(response.message, '', {
        verticalPosition: 'top', duration: 4000
      });
      this.router.navigate(['/music']);
    }, (error: any) => {
      console.log(error);
    });
  }

  confirmation(): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: `Are you sure you want to delete?`
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.httpClient.post(
          `${Constants.music}/delete/${this.music.id}`,
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
