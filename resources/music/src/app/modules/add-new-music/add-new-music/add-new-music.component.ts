import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Constants} from '../../../common/constants';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router";

const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-music.component.html',
  styleUrls: ['./add-new-music.component.scss']
})
export class AddNewMusicComponent implements OnInit {

  public isLoading = false;
  public form: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    file: new FormControl(null, Validators.required),
    author: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    language: new FormControl(null, Validators.required)
  });
  public formData = new FormData();

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  fileUpload(event: Event) {
    // @ts-ignore
    this.formData.append('file', event.target.files[0]);
  }

  uploadMusicFile(): void {
    if (this.form.valid) {
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
    }
  }

  addNewMusic(file: string) {
    const data = this.form.value;
    data.file = file;
    this.httpClient.post(
      Constants.music,
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

}
