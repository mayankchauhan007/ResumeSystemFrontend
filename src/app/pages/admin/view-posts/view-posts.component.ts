import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent {
  constructor(private _post:PostService){}
  
  
  categories: any;

  ngOnInit(): void {
    this._post.posts().subscribe((data:any)=>
    {
      this.categories = data;
      console.log(this.categories);
    },
  (error)=>{
    console.log(error);
    Swal.fire("Error !!", "error in loading data", 'error');
  })
}

}
