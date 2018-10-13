import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseFirestoreService } from '../services/firebase-firestore.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-boards-create',
  templateUrl: './boards-create.component.html',
  styleUrls: ['./boards-create.component.css']
})
export class BoardsCreateComponent implements OnInit {
  boardsForm: FormGroup;
  title: '';
  description: '';
  author: '';

  constructor(
    private firebaseFirestoreService: FirebaseFirestoreService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.boardsForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'author': [null, Validators.required]
    });
  }


  onFormSubmit(form: NgForm) {
    this.firebaseFirestoreService.postBoards(form)
      .subscribe(res => {
        const id = res['key'];
        this.router.navigate(['/boards-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
