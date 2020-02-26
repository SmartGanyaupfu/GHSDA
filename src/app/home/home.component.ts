import { Component, OnInit } from '@angular/core';
import { WpapiService } from '../model/services/wpapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: any;
  

  constructor(private wpapiService: WpapiService) { }

  ngOnInit() {
    this.wpapiService.getNews().subscribe(data => {
      console.log(data);
      this.content = data['content']['rendered'];
    });
  }

}
