import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2Md5App} from '../app/ng2-md5.component';

beforeEachProviders(() => [Ng2Md5App]);

describe('App: Ng2Md5', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2Md5App], (app: Ng2Md5App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2Md5App], (app: Ng2Md5App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

