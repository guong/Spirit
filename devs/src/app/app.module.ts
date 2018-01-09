import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleComponent } from './article/article.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';



const routes: Routes = [
    {path: '', redirectTo: '/article-list', pathMatch: 'full'},
    {path: 'article-list', component: ArticleListComponent},
    {path: 'resume', component: ResumeComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        ArticleComponent,
        ResumeComponent,
        FooterComponent,
        ArticleListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
