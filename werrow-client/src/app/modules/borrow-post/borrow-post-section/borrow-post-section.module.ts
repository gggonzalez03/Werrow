import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BorrowPostCardModule } from '../borrow-post-card/borrow-post-card.module';
import { BorrowPostCommentModule } from '../borrow-post-comment/borrow-post-comment.module';
import { BorrowPostCreateFormModule } from '../borrow-post-create-form/borrow-post-create-form.module';

import { BorrowPostSectionComponent } from './borrow-post-section.component';

const routes: Routes = [
  { path: '', component: BorrowPostSectionComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BorrowPostCardModule,
        BorrowPostCommentModule,
        BorrowPostCreateFormModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        BorrowPostSectionComponent
    ],
    providers: [],
})
export class BorrowPostSectionModule { }