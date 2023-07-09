import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  public posts(){
    return this._http.get(baseUrl+"/posts");
  }
  public addPost(post:any){
    return this._http.post(baseUrl+"/posts", post);
  }
}
