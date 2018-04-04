// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBh0yOgUW-yz4CCRvDJ1P-fFPSrgIIYNAI",
    authDomain: "everis-meetup.firebaseapp.com",
    databaseURL: "https://everis-meetup.firebaseio.com",
    projectId: "everis-meetup",
    storageBucket: "everis-meetup.appspot.com",
    messagingSenderId: "796103169543"
  }
};
