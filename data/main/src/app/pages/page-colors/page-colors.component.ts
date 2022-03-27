import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgHttpCachingHeaders, NgHttpCachingService } from 'ng-http-caching';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-page-colors',
  templateUrl: './page-colors.component.html',
  styleUrls: ['./page-colors.component.scss'],
})
export class PageColorsComponent implements OnInit {
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
      .get<any>('https://reqres.in/api/colors', {
        headers: {
          [NgHttpCachingHeaders.ALLOW_CACHE]: '1',
          [NgHttpCachingHeaders.TAG]: 'pages,colors',
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
