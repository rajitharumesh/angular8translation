import { Component } from '@angular/core';
import { TranslateItemService } from './service/translate-item.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor(private translateItemService: TranslateItemService, private translate: TranslateService) {
    translate.setDefaultLang('jp');
    this.translateItemService.getTranslateMessageValue('title');
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.title = this.translateItemService.getTranslateMessageValue('title');
    // if (language === 'jp') {
    //   // translate.setDefaultLang('jp');
    //   this.translateItemService.getTranslateMessageValue('title');
    // } else {
    //   this.translateItemService.getTranslateMessageValue('title');
    // }
  }
}
