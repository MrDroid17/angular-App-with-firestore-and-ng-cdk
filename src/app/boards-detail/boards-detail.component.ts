import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseFirestoreService } from '../services/firebase-firestore.service';

@Component({
  selector: 'app-boards-detail',
  templateUrl: './boards-detail.component.html',
  styleUrls: ['./boards-detail.component.css']
})
export class BoardsDetailComponent implements OnInit {
  board = {};

  constructor(
    private firebaseFirestoreService: FirebaseFirestoreService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.getBoardDetails(this.route.snapshot.params['id']);
  }

  // get board details
  getBoardDetails(id) {
    this.firebaseFirestoreService.getBoard(id)
      .subscribe(data => {
        console.log(data);
        this.board = data;
      });
  }

  // deleate board details
  deleteBoard(id) {
    this.firebaseFirestoreService.deleteBoards(id)
      .subscribe(res => {
          this.router.navigate(['/boards']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
