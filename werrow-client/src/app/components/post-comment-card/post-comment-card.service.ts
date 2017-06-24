import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Comment } from '../../models/comment';

@Injectable()
export class PostCommentCardService {

  constructor(
    private http: Http
  ) { }

  addComment(comment: Comment) {
    return this.http.post('/api/comment/create', comment)
    .map(data => data.json()).toPromise();
  }

  getPostComments(postId: string) {
    let data = {
      postId: postId
    }
    return this.http.post('/api/comment/comments', data)
    .map(data => data.json()).toPromise();
  }

}
