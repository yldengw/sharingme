import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  // 超简单, 重点: 接收上级的值
  // 可以为树建立一个接口, 这里简化为any
  @Input() treelists: any;

  // 点击动作
  itemClick(i) {
    // 建立一个服务来接收这个值, 或者借助双向绑定, 处理动作
    i._open = i._open;  // 本例只简单演示开关, 借助 treelists本身实现
  }
}