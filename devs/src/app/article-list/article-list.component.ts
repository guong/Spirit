import { Component, OnInit } from '@angular/core';
import {Hero} from '../../../../../my-app/src/app/hero';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
    category: ArticleCategory[] = [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'PHP' },
        { id: 3, name: 'HTML' },
        { id: 4, name: 'CSS' },
        { id: 5, name: 'NodeJS' },
    ];
    articles: Article[] = [
        { id: 1, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 2, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 3, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 4, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 5, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 6, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 7, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 8, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 9, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'},
        { id: 10, title: 'some', create_time: '20180110', view_count: 5, summary: 'some'}
    ]
  constructor() { }

  ngOnInit() {
  }

}

export class ArticleCategory {
    id: number;
    name: string;
}

export class Article {
    id: number;
    title: string;
    create_time: string;
    view_count: number;
    summary: string;
}
