// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD2XX4HLhKA1F76tOAlPzkba7VLGVi1zS8',
    authDomain: 'ngrx-tech-talk.firebaseapp.com',
    databaseURL: 'https://ngrx-tech-talk.firebaseio.com',
    projectId: 'ngrx-tech-talk',
    storageBucket: 'ngrx-tech-talk.appspot.com',
    messagingSenderId: '584122832175'
  }
};
