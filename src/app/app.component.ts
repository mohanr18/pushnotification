import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'af-notification';
  message:any = null;
  currenttoke:any;
  constructor() {}
  ngOnInit(): void {
    debugger;
    this.requestPermission();
    this.listen();
  }
  requestPermission() {

    const messaging = getMessaging();

    getToken(messaging, { vapidKey: environment.firebase.vapidKey }).then((currentToken) => {
      if (currentToken) {
        console.log("Hurraaa!!! we got the token.....")
        console.log(currentToken);
        this.currenttoke=currentToken;
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      alert('An error occurred while retrieving token. '+ err);
      // ...
    });

  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      debugger;
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }
}