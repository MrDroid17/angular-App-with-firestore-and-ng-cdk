import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseFirestoreService } from '../services/firebase-firestore.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-boards-edit',
  templateUrl: './boards-edit.component.html',
  styleUrls: ['./boards-edit.component.css']
})
export class BoardsEditComponent implements OnInit {
  boardsForm: FormGroup;
  id: string;
  title: '';
  description: '';
  author: '';

  constructor(
    private firebaseFirestoreService: FirebaseFirestoreService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.getBoard(this.route.snapshot.params['id']);
    this.boardsForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'author': [null, Validators.required]
    });
  }

  getBoard(id) {
    this.firebaseFirestoreService.getBoard(id).subscribe(data => {
      this.id = data.key;
      this.boardsForm.setValue({
        title: data.title,
        description: data.description,
        author: data.author
      });
    });
  }


  onFormSubmit(form: NgForm) {
    this.firebaseFirestoreService.updateBoards(this.id, form)
      .subscribe(res => {
        this.router.navigate(['/boards']);
      }, (err) => {
        console.log(err);
      }
      );
  }

  boardsDetails() {
    this.router.navigate(['/boards-details', this.id]);
  }
}
