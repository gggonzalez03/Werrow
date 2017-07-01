import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LogoutButtonComponent
    ],
    providers: [],
})
export class SharedModule { }
