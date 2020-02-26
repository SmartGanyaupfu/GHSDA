import { Component, OnInit } from '@angular/core';
import { Posts } from '../../model/classes/posts';
import { WpapiService } from '../../model/services/wpapi.service';
import { ActivatedRoute } from '@angular/router';
import { WpPost, FeatureImage } from '../../model/interfaces/wppsots';
import { mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: WpPost;
  featureImageUrl: string;
  constructor(private wpapiService: WpapiService, private route: ActivatedRoute) { }

  ngOnInit() {
   // this.loadBlog();
    this.route.data.subscribe(data => {
      this.blog = data['blog'];
      this.wpapiService.getFeatureImage(data['blog'].featured_media).subscribe((image: FeatureImage) => {
       this.featureImageUrl = image.source_url;
        console.log(this.featureImageUrl);
      })
    })
  }
  //public loadBlog() {
  //  from(this.wpapiService.getBlog(this.route.snapshot.params['id'])).subscribe(res => {
  //    this.blog = res;
  //    console.log(res)
  //    this.wpapiService.getFeatureImage(res.featured_media).subscribe((image: FeatureImage) => {
  //      this.featureImageUrl = image.source_url;
  //      console.log(this.featureImageUrl);
  //    })
  //  }) 
  //}
}
