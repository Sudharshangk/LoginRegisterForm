import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public confirmdel(){
    if(confirm("Are you sure You want to delete")){
      console.log("Delete confirmed");
  }

}
  }

