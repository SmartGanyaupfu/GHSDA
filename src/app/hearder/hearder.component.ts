import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent implements OnInit {

  logoUrl: string = "http://www.goldenharvestsda.co.za/wp-content/uploads/2016/03/gh-new-3.png";

  constructor() { }

  ngOnInit() {
  }

}
