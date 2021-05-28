import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from '../posts';
import { Observable } from 'rxjs';
import { baseUrl } from '../helpers/baseurl';

@Injectable()
export class PostService {
    
  private url: string = 'posts';
  constructor(private http: HttpClient, private baseurl: baseUrl) { }

  getPosts(): Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this.url);
}

}
