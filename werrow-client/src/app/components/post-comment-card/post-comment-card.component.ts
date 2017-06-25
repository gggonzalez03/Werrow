import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Comment } from '../../models/comment';
import { PostCommentCardService } from './post-comment-card.service';

@Component({
  selector: 'app-post-comment-card',
  templateUrl: './post-comment-card.component.html',
  styleUrls: ['./post-comment-card.component.css']
})
export class PostCommentCardComponent implements OnInit {

  commentForm: FormGroup;
  @Input() postId: string;
  @Input() comments: Array<Comment>;

  constructor(
    private postCommentCardService: PostCommentCardService
  ) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      comment: new FormControl()
    })

    this.getPostComments();
  }

  addComment() {
    let newComment = new Comment();

    newComment.comment = this.commentForm.value.comment;
    newComment.borrow_post_id = this.postId;

    this.postCommentCardService.addComment(newComment)
    .then(result => {
      console.log(result);
      this.comments.push(result.comment);
      this.commentForm.reset();
    })
    .catch(err => console.log(err));
  }

  getPostComments() {
    this.postCommentCardService.getPostComments(this.postId)
    .then(result => {
      this.comments = result.data;
    })
    .catch(err => console.log(err));
  }

}
