/**
 * Created by yitala on 2016/11/25.
 */
import {Component, ViewChild,  OnInit} from '@angular/core';
import { KSSwiperContainer } from 'angular2-swiper';

@Component({
    selector:'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {


   // 单机上一个下一个的时候调用封装子组件中的方法
  // @ViewChild(KSSwiperContainer)
  // swiperContainer: KSSwiperContainer;

  // // 图片数组
  // data: Array<number>;
  // // 配置
  // swipeOptions: any;

  // constructor() {
  //   this.swipeOptions = {
  //     // 每页显示几张图片
  //     slidesPerView: 4,
  //     // 是否循环
  //     loop: false,
  //     spaceBetween: 1
  //   };
  //   this.data = [
  //     1, 2, 3, 4, 5, 6
  //   ];
  // }
  // // 下一个
  // moveNext() {
  //   this.swiperContainer.swiper.slideNext();
  // }
  // // 上一个
  // movePrev() {
  //   this.swiperContainer.swiper.slidePrev();
  // }
  currentPic = 0;
  constructor() {
       setInterval(() => {
              const id = (this.currentPic + 1) % 3;
             this.currentPic = id;
    }, 3000);
   }

  changebanner(id) {
         console.log(id);
        this.currentPic = id;
    }
}