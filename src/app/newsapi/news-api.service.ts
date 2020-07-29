import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap, tap, pluck } from 'rxjs/operators';


export interface Article{
  title:string;
  url:string;
  source:{
    name:string;
  };
}

interface NewsApiResponse{
  totalResults:number;
  articles:Article[];
}


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
private url='https://newsapi.org/v2/top-headlines';
private pageSize=10;
private apikey='6694314ecc0f47e7b956637d523b8b93';
private country='in';
private pagesInput:Subject<number>;
pagesOutput:Observable<Article[]>;
numberofPages:Subject<number>;
  constructor(private http:HttpClient) { 
    this.numberofPages=new Subject();
    this.pagesInput=new Subject();
    this.pagesOutput=this.pagesInput.pipe(
      map((page)=>{
        return new HttpParams()
        .set('apiKey',this.apikey)
        .set('country',this.country)
        .set('pageSize',String(this.pageSize))
        .set('page',String(page))
      }),
      switchMap((params)=>{
        return this.http.get<NewsApiResponse>(this.url,{params});
      }),
      tap((response)=>{
        const totalPages=Math.ceil(response.totalResults/this.pageSize);
        this.numberofPages.next(totalPages);
      }),
      pluck('articles')
    );
    
  }

  getPage(page:number){
    this.pagesInput.next(page);
  }
}
