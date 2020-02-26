import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { SafePipe } from './safe.pipe';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogdetailResolve } from './model/resolvers/blogdetail.resolve';
import { BlogListResolve } from './model/resolvers/blogsList.resolve';
import { ChurchMemberComponent } from './church-member/church-member.component';


@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    SafePipe,
    BlogCardComponent,
    BlogDetailComponent,
    ChurchMemberComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [BlogdetailResolve, BlogListResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
