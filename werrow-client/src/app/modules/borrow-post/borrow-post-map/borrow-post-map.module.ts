import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from '../../../components/google-map/google-map.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        GoogleMapComponent
    ],
    declarations: [
        GoogleMapComponent
    ],
    providers: [],
})
export class BorrowPostMapModule { }
