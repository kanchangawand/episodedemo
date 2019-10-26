import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  showData:any;
  episodeFlag:boolean =false;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getShow().subscribe(
      data => {
        console.log(data["image"]);
        this.showData = data;

      }
    )
  }

  episodes() {
    this.episodeFlag = true;

  }

}
