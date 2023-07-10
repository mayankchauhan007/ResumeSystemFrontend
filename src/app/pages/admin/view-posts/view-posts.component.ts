import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import baseUrl from 'src/app/services/helper';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent {
  constructor(private _post:PostService,private http: HttpClient){}

  imageData:any;

// Make the GET request to fetch the image data
  posts: any;

  ngOnInit(): void {
    this._post.posts().subscribe((data:any)=>
    {
      this.posts = data;
      console.log(this.posts);
    },
  (error)=>{
    console.log(error);
    Swal.fire("Error !!", "error in loading data", 'error');
  })
}
deleteQuiz(id:any){
  Swal.fire({
   icon:'warning',
   'title': "Are you sure about that ?",
   confirmButtonText: 'Delete',
   showCancelButton:true,
  }).then((result)=>
  {
   if(result.isConfirmed){
       console.log("delete quiz works");
       this._post.deletePost(id).subscribe((data:any)=>
       {
         this.posts = this.posts.filter((post:any)=>post.id !=id);
         Swal.fire("Success !!", "Quiz deleted successfully", 'success');
       },
     (error)=>{
       console.log(error);
       Swal.fire("Error !!", "error in loading data", 'error');
     })
   }
  })

 }

}
