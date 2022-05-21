import {environment} from '../../environments/environment';

export const BaseUrl = environment.imageUrl;

// const BaseUrl = `https://mi-linux.wlv.ac.uk/~2017781/personal-library/public/`;

export class Constants {
  static music = environment.appUrl + `music`;
  static musicFileUpload = environment.appUrl + 'music/upload';
}
