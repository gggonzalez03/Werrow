import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GoogleMapService } from './google-map.service';
import { Address } from '../user/address'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  loggedInUserId: number;
  userAnswer: boolean;
  mapSource: string;

  @Input() postId: number;


  constructor(
    private sanitizer: DomSanitizer,
    private googleMapService: GoogleMapService
  ) { }

  ngOnInit() {
    // TODO: Validate user with tokens
    this.loggedInUserId = Number(sessionStorage.getItem("currentUserId"));
    //this.askUserLocation();
  }
  //mapSource = "//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK&zoom=17&key=AIzaSyCRxEH46LiEj20I32r-QccBR_X8MHpA0iM";

  askUserLocation() {
    this.userAnswer = confirm("Werrow wants to use your location.");

    if(this.userAnswer) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
      });
    }
  }

  getAddressByPostId(postId: number) {
      return this.googleMapService.getAddressByPostId(postId);
  }

  mapUrl(address: Address) {
    return this.mapSource = `//www.google.com/maps/embed/v1/place?q=`
    + address.city + `` + address.state +`
    &zoom=17
    &key=AIzaSyCRxEH46LiEj20I32r-QccBR_X8MHpA0iM`;
  }

  // Sanitizes the URL for safe injection in the HTML
  mapSourceSanitized() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl(this.getAddressByPostId(this.postId)));
  }

}
