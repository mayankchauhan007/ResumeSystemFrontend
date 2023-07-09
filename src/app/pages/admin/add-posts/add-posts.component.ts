import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {
  constructor(private _post:PostService, private snack:MatSnackBar){}

  post ={
    title :'',
    description:''
  }

  formSubmit(){
    if(this.post.title.trim() == '' || this.post.title == null)
    {
      this.snack.open("Title Required !!",'Ok',{
        duration:3000
      })
      return;
    }
    this._post.addPost(this.post).subscribe(
      (data:any)=>{
        Swal.fire("Success !!",'Post added successfully','success');
        console.log(this.post);
        
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!" , 'Server Error !!', 'error');
      }
    );
  }

}

