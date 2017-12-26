import { GridDemo } from './model/gridDemo';
import { Column } from './model/column';
import { Component, OnInit, Input } from '@angular/core';
import { Sorter } from './model/sorter';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columns: Array<Column>;
  @Input() rows: Array<any>;
  @Input() name: string;

  sorter = new Sorter();
  gridDemo = new GridDemo();
  sort(key) {
      this.sorter.sort(key, this.rows);
  }

  ngOnInit() {
      this.columns = this.gridDemo.getColumns();
      this.rows = this.gridDemo.getPeople();
      console.log(this.name);
  }

}
