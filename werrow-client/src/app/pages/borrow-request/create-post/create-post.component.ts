import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import { BorrowRequest } from '../borrow-request';
import { BorrowRequestService } from '../borrow-request.service'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;

  @Output() createPostEvent = new EventEmitter;
  postBorrowMode = false;

  constructor(
    private borrowRequestService: BorrowRequestService
  ) { }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      item_name: new FormControl(),
      reason: new FormControl()
    })
  }

  // Creates a new post by asking BorrowRequestService to add
  // the post to the database
  createBorrowPost() {
    let newUserPost = new BorrowRequest();

    newUserPost.item_name = this.createPostForm.value.item_name;
    newUserPost.reason = this.createPostForm.value.reason;

    this.borrowRequestService.createBorrowPost(newUserPost)
    .then(result => {
      console.log(result);
      this.createPostEvent.emit()
    })
    .catch(err => console.log(err));
    this.postBorrowMode = false;
  }

}
