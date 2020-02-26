import { Injectable } from "@angular/core";
import { WpPost } from '../interfaces/wppsots';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { Observable, of, from } from 'rxjs';
import { catchError, mergeMap, toArray } from 'rxjs/operators';

@Injectable()
export class BlogListResolve implements Resolve<WpPost[]>{
  constructor(private wpapiService: WpapiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<WpPost[]> {
    return this.wpapiService.getBlogs().pipe(mergeMap((blogz: any[]) => from(blogz)),
      mergeMap(blog => this.wpapiService.getBlogFeatureImage(blog)), toArray(), catchError(
        error => {
          this.router.navigate(['/home']);
          return of(null);
        })
    )
  }
}
