import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidernav',
  templateUrl: './sidernav.component.html',
  styleUrls: ['./sidernav.component.css']
})
export class SidernavComponent implements OnInit {
  public currentTime: Date = new Date();
  collapse: Boolean = false;
  menu = [{
    title: '1',
    _open: true, // 默认打开第一级;
    items: [{
      title: '1.1',
      items: [
        {
          name: '1.1.1',
          title: 'xxx',
          items: []
        }
      ]
    }, {
      title: '1.2',
      items: []
    }
    ]
  }];
  constructor() {
    window.setInterval(() => this.currentTime = new Date()
    , 1000);
   }

  ngOnInit() {
    
  }
  changeSider() {
     this.collapse = !this.collapse;
  }

}
