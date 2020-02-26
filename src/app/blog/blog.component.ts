import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { WpapiService } from '../model/services/wpapi.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { WpPost, FeatureImage } from '../model/interfaces/wppsots';
import { error } from '@angular/compiler/src/util';
import { Posts } from '../model/classes/posts';
import { AsyncSubject, Observable, from, of } from 'rxjs';
import { mergeMap, switchMap, toArray, delay, map, mergeAll} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private wpapiService: WpapiService, private sanitizer: DomSanitizer, private http: HttpClient, private route: ActivatedRoute) { }

  blogs: WpPost[];
  //private _blogs$ = new AsyncSubject();
  private _images$: Observable<any>;
  _blogs$: any;
   


  ngOnInit() {
    // this.loadFeatureImage();
    this.loadBlogs();
   // this.loadBlogsV2();

   

  }
  loadBlogs() {
    this.wpapiService.getBlogs().pipe(mergeMap((blogz: any[]) => from(blogz)),
      mergeMap(blog => this.wpapiService.getBlogFeatureImage(blog)), toArray()).subscribe(res => {

       this.blogs = res;
        console.log(res);
      })
      
    
  }
  /* using a resolver*/
  loadBlogsV2() {
    this.route.data.subscribe(blogsData => {
      this.blogs = blogsData['blogs'];
    })
  }
}

    

