import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

/**
 * firebase configuration
 */
const settings = { timestampsInSnapshots: true };
const config = {
  apiKey: 'AIzaSyBvj5vyeHiIZYmrwk0a6Z0MrGPdaE8w1mE',
  authDomain: 'angular-firebase-storage-b50a7.firebaseapp.com',
  databaseURL: 'https://angular-firebase-storage-b50a7.firebaseio.com',
  projectId: 'angular-firebase-storage-b50a7',
  storageBucket: 'angular-firebase-storage-b50a7.appspot.com',
  messagingSenderId: '447656612162'
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-app-with-fb-firestore-and-cdk-poc';

  ngOnInit() {
    /**
     * initialize firebase app
     */
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
