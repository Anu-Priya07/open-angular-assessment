import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appLogo : string;

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
    this.getImageLink();
  }

  getImageLink() {
    this.sharedService.getJsonFromAsset('assets/json/general-images').subscribe(imageLinks => {
      let imageData : any = imageLinks
      this.appLogo = imageData.header.appLogo;
      console.log(this.appLogo)
    })
  }

//to change the background color of header on scroll
@HostListener('window:scroll', ['$event'])
onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('header-scrolled');
    } else {
      element.classList.remove('header-scrolled');
    }
  }

}
