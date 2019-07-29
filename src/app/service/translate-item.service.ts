import { Injectable, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateItemService {

  @Output() language: EventEmitter<string> = new EventEmitter();

  constructor(private translate: TranslateService) { }

  getTranslateMessageValue(key: string) {
    let result = "";
    this.translate.get(key).subscribe((res: any) => {
      result = res;
    });
    return result;
  }
}
