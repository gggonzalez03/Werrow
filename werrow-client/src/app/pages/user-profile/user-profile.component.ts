import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service'
import { BorrowRequest } from '../../models/borrow-request';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  borrowPosts: Array<BorrowRequest> = [];

  constructor(
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
    this.getCurrentUserPosts();
  }

  getCurrentUserPosts() {
    this.userProfileService.getCurrentUserPosts()
    .then(result => this.borrowPosts = result.data)
    .catch(err => console.log(err));
    /*borrowPosts.forEach(post => {
        post.time_ago = this.timeInstance.format(post.time_stamp);
    });*/
  }

}
