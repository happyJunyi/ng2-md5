import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Ng2Md5App} from './app/ng2-md5.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2Md5App);
