import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileHeaderModule } from './user-profile-header/user-profile-header.module';
import { UserProfileRecordModule } from './user-profile-record/user-profile-record.module';
import { BorrowPostCardModule } from '../../borrow-post/borrow-post-card/borrow-post-card.module';
import { BorrowPostCommentModule } from '../../borrow-post/borrow-post-comment/borrow-post-comment.module';
import { BorrowPostCreateFormModule } from '../../borrow-post/borrow-post-create-form/borrow-post-create-form.module';

import { UserProfileSectionComponent } from './user-profile-section.component';

const routes: Routes = [
  { path: '', component: UserProfileSectionComponent},
];

@NgModule({
    imports: [
        CommonModule,
        UserProfileHeaderModule,
        BorrowPostCardModule,
        BorrowPostCommentModule,
        BorrowPostCreateFormModule,
        UserProfileRecordModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        UserProfileSectionComponent
    ],
    providers: [],
})
export class UserProfileSectionModule { }