import { Component, OnInit } from '@angular/core';
import { BorrowRequestService } from '../../../services/borrow-request.service';
import { UserService } from '../../../services/user.service';
import { BorrowRequest } from '../../../models/borrow-request';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-profile-section',
  templateUrl: './user-profile-section.component.html',
  styleUrls: ['./user-profile-section.component.css']
})
export class UserProfileSectionComponent implements OnInit {

  borrowPosts: Array<BorrowRequest> = [];
  currentUser: User = new User();

  constructor(
    private borrowRequestService: BorrowRequestService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCurrentUserPosts();
    this.getCurrentUser();
  }

  getCurrentUserPosts() {
    this.borrowRequestService.getCurrentUserPosts()
    .then(result => this.borrowPosts = result.data)
    .catch(err => console.log(err));
    /*borrowPosts.forEach(post => {
        post.time_ago = this.timeInstance.format(post.time_stamp);
    });*/
  }

  getCurrentUser() {
    this.userService.getCurrentUser()
    .then(result => this.currentUser = result.user)
    .catch(err => console.log(err));
  }

}
