import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  newsApi:any = "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa2a33a093324d64b4446ccdbd5e025b&category=business";
  articles:any=[];
  constructor(private http: HttpClient) { 
    this.loadNews();
  }
  
  

  loadNews(){
    this.http.get(this.newsApi).subscribe((response:any)=>{
      console.log(response);
      this.articles = response.articles;
    },

    error=>
    {console.log(error);})

  }

ngOnInit(): void {

  }
}

