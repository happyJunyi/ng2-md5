const barrels: string[] = [
  'app',
  'app/shared',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
    'ts-md5': { 
      map: { 
        './md5': './dist/md5.js'
      }
    }
  }, createPackageConfig(barrels)),
  map: {
    'ts-md5': 'vendor/ts-md5'
  }
};
