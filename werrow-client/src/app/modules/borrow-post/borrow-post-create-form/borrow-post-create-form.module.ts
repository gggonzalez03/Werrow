import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreatePostFormComponent } from '../../../components/create-post-form/create-post-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        CreatePostFormComponent
    ],
    declarations: [
        CreatePostFormComponent
    ],
    providers: [],
})
export class BorrowPostCreateFormModule { }
