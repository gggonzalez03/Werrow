import { Component, OnInit } from '@angular/core';
import { UserProfilePageService } from './user-profile-page.service'
import { BorrowRequest } from '../../models/borrow-request';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  borrowPosts: Array<BorrowRequest> = [];

  constructor(
    private userProfileService: UserProfilePageService
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
