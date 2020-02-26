import { Injectable } from "@angular/core";
import { WpPost } from '../interfaces/wppsots';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BlogdetailResolve implements Resolve<WpPost>{
  constructor(private wpapiService: WpapiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<WpPost> {
    return this.wpapiService.getBlog(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/blog']);
        return of(null);
      })
    );
  }
}
