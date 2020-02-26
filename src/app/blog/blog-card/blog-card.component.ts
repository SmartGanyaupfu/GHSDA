import { Component, OnInit, Input } from '@angular/core';
import { WpPost, FeatureImage } from '../../model/interfaces/wppsots';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: WpPost;
  //@Input() imageUrl: FeatureImage;

  constructor() { }

  ngOnInit() {
  }

}
