import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
@Input() numberofPages:number;
pageOptions:number[];

@Output() pageChanged=new EventEmitter()

currentPage=1;
  constructor() {
   }

  ngOnInit(): void {
    this.pageOptions=[
      this.currentPage-2,
      this.currentPage-1,
      this.currentPage,
      this.currentPage+1,
      this.currentPage+2
    ].filter(pagenumber=>pagenumber >= 1 && pagenumber <= this.numberofPages);
  }

  onPageClicked(page:number){
    this.pageChanged.emit(page);
    this.currentPage=page;
    this.pageOptions=[
      this.currentPage-2,
      this.currentPage-1,
      this.currentPage,
      this.currentPage+1,
      this.currentPage+2
    ].filter(pagenumber=>pagenumber >= 1 && pagenumber <= this.numberofPages);
  }

}
