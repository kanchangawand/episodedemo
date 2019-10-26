import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-episodeslist',
  templateUrl: './episodeslist.component.html',
  styleUrls: ['./episodeslist.component.css']
})
export class EpisodeslistComponent implements OnInit {

  showData:any;
  episodeFlag:boolean =false;
  episodeData:any;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getShow().subscribe(
      data => {
        console.log(data["_embedded"]["episodes"]);
        this.showData = data["_embedded"]["episodes"];

      }
    )
  }

  episodeDetails(episode) {
    console.log("episode in list"+ JSON.stringify(episode))
    this.episodeFlag = true;
    this.episodeData = episode
  }

}
