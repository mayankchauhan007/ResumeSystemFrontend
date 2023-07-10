import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  constructor(private _post:PostService){}
  
  
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

}
