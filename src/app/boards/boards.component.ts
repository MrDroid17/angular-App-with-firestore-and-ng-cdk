import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FirebaseFirestoreService } from '../services/firebase-firestore.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  displayedColumns = ['title', 'description', 'author'];
  dataSource = new BoardDataSource(this.firebaseFirestoreService);

  constructor(private firebaseFirestoreService: FirebaseFirestoreService) { }

  ngOnInit() {
  }

}

export class BoardDataSource extends DataSource<any> {

  constructor(private firebaseFirestoreService: FirebaseFirestoreService) {
    super();
  }

  connect() {
    return this.firebaseFirestoreService.getBoards();
  }

  disconnect() {

  }
}
