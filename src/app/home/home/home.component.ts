import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allImageLinks :  any;
  benefitArray :  any = [];

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
    this.getImageLinks();
    this.getBenefitJson();
  }

  getImageLinks() {
    this.sharedService.getJsonFromAsset('assets/json/general-images').subscribe(imageData => {
      this.allImageLinks = imageData;
      console.log(this.allImageLinks);
    })
  }

  getBenefitJson() {
    this.sharedService.getJsonFromAsset('assets/json/benefit-mock').subscribe(benefitJson => {
      this.benefitArray = benefitJson;
      console.log(this.benefitArray)
    })
  }

}
