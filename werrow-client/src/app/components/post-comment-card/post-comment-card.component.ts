import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-post-comment-card',
  templateUrl: './post-comment-card.component.html',
  styleUrls: ['./post-comment-card.component.css']
})
export class PostCommentCardComponent implements OnInit {

  commentForm: FormGroup;
  @Input() postId: string;
  @Input() comments: Array<Comment>;
  @Output() addCommentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      comment: new FormControl()
    })
  }

  addComment() {
      let newComment = new Comment();

      newComment.comment = this.commentForm.value.comment;
      newComment.borrow_post_id = this.postId;

      this.addCommentEvent.emit(newComment);
      this.commentForm.reset();
  }

}
