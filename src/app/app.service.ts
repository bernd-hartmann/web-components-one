import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  public static resources_en = {
    'text': 'Your main focus today is the following: ',
    'question': 'Your main focus today is?'
  };

  constructor() {
  }

  public get(key: string) {
    return AppService.resources_en[key];
  }
}
