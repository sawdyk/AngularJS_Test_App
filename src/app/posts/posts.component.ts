import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts = [] as any;
  public pst = [] as any;
  constructor(private post: PostService) { }

  ngOnInit(){

    this.post.getPosts().subscribe(data => this.posts = data);    
    console.log();
  }  

}
