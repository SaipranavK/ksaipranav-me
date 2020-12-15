import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saipranav-me';

  navClickItem: string = window.location.href.replace("https://ksaipranav.me/",'');
  
  ngOnInit(){
    console.log(this.navClickItem);
  }

  navClick(item:string){
    this.navClickItem = item;
  }

}
