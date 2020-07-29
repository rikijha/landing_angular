import { Component, OnInit } from '@angular/core';
import { NewsApiService ,Article} from '../news-api.service';

@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.css']
})
export class NaArticleListComponent implements OnInit {
articles:Article[];
numberOfPages:number;
  constructor(private newsapiService:NewsApiService) {
    this.newsapiService.pagesOutput.subscribe((articles)=>{
           this.articles=articles;
    });
    this.newsapiService.getPage(1);
    this.newsapiService.numberofPages.subscribe(num=>{
      this.numberOfPages=num;
    });
    
   }

  ngOnInit(): void {
    
  }

  onPagedChange(page:number){
    this.newsapiService.pagesOutput.subscribe((articles)=>{
      this.articles=articles;
});
this.newsapiService.getPage(page);
  }

}
