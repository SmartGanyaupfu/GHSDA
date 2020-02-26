
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { WpPost, FeatureImage } from '../interfaces/wppsots';
import { map } from 'rxjs/operators';
import { ChurchMember } from '../interfaces/church-members';

@Injectable({
  providedIn: 'root'
})
export class WpapiService {
  id: any = 4438;
  baseUrl = environment.wpApiUrl;
  membersBaseUrl = environment.churchMembersApiUrl;
  public getNews() {
    return this.httpClient.get(`${this.baseUrl}pages/${this.id}/`);
  }

  /*injecting the Httpclient into the service*/
  constructor(private httpClient: HttpClient) { }

  public getBlogs(): Observable<WpPost[]> {
    return this.httpClient.get<WpPost[]>( `${this.baseUrl}posts/`);
  }

  public getBlog(id): Observable<WpPost> {
    return this.httpClient.get<WpPost>(`${this.baseUrl}posts/${id}`);
  }
  public getFeatureImage(id): Observable<any> {
    return this.httpClient.get<FeatureImage>(`${this.baseUrl}media/${id}`);
  }



  public getBlogFeatureImage(blog): Observable<any> {
    return this.httpClient.get<FeatureImage>(`${this.baseUrl}media/${blog.featured_media}`).pipe(map(image => {
      blog.image = image;
      return blog;
    }))
  }
}
