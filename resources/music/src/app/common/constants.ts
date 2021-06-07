import {environment} from '../../environments/environment';

export const BaseUrl = environment.appUrl;

// const BaseUrl = `https://mi-linux.wlv.ac.uk/~2017781/personal-library/public/`;

export class Constants {
  static music = BaseUrl + `music`;
  static musicFileUpload = BaseUrl + 'music/upload';
}
