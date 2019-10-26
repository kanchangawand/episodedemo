import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-episodesdetails',
  templateUrl: './episodesdetails.component.html',
  styleUrls: ['./episodesdetails.component.css']
})
export class EpisodesdetailsComponent implements OnInit {

  @Input() episode:any; 
  showData:any;
  episodeData:any;
  constructor(private apiService:ApiService) { };

  ngOnInit() {
    this.episodeData=this.episode
    // this.apiService.getShow().subscribe(
    //   data => {
    //       this.showData = data["_embedded"]["episodes"];
    //       console.log("episode in details"+ JSON.stringify(this.showData.find(item => item.id === this.episode.id)))
    //       this.episodeData = this.showData.find(item => item.id === this.episode.id);

    //   }
    // )
  }

}
