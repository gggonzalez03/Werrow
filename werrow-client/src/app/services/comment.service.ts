import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../models/comment';

@Injectable()
export class CommentService {
    constructor(private http: Http) { }
    

    addComment(comment: Comment) {
        return this.http.post('/api/comment/create', comment)
        .map(data => data.json()).toPromise();
    }

    getPostComments(postId: number) {
        let data = {
            postId: postId
        }
        return this.http.post('/api/comment/comments', data)
        .map(data => data.json()).toPromise();
    }
}