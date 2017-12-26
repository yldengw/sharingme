import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {

  // 单机上一个下一个的时候调用封装子组件中的方法
  @ViewChild(KSSwiperContainer)
  swiperContainer: KSSwiperContainer;

  // 图片数组
  data: Array<number>;
  // 配置
  swipeOptions: any;

  constructor() {
    this.swipeOptions = {
      // 每页显示几张图片
      slidesPerView: 4,
      // 是否循环
      loop: false,
      spaceBetween: 5
    };
    this.data = [
      1, 2, 3, 4, 5, 6
    ];
  }
  // 下一个
  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }
  // 上一个
  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }


}
