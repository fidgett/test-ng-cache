import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgHttpCachingHeaders, NgHttpCachingService } from 'ng-http-caching';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss'],
})
export class PageUsersComponent implements OnInit {
  public data$!: Observable<any>;

  constructor(
    private httpClient: HttpClient,
    private ngHttpCachingService: NgHttpCachingService
  ) {}

  public ngOnInit(): void {
    this.data$ = this.getData();
  }

  private getData(): Observable<any> {
    return this.httpClient
      .get<any>('https://reqres.in/api/users', {
        headers: {
          [NgHttpCachingHeaders.ALLOW_CACHE]: '1',
          [NgHttpCachingHeaders.TAG]: 'pages,users',
        },
      })
      .pipe(
        map((response) => {
          if (response.body) {
            response = response.body;
          }

          return response.data;
        })
      );
  }
}
