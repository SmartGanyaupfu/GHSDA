import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogdetailResolve } from './model/resolvers/blogdetail.resolve';
import { BlogListResolve } from './model/resolvers/blogsList.resolve';
import { ChurchMemberComponent } from './church-member/church-member.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent, resolve: { blog: BlogdetailResolve } },
  { path: 'members', component: ChurchMemberComponent },
  { path: '**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
