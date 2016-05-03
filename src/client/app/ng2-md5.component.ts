import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-md5-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'ng2-md5.component.html',
  styleUrls: ['ng2-md5.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class Ng2Md5App {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
