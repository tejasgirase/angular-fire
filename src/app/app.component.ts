import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works';
  item : Observable<any>;
  constructor(private db : AngularFireDatabase){
    this.item = db.object('item').valueChanges();
    console.log("this is calle",this.item);
  }
}
