import { Component, OnInit } from '@angular/core';
import { NgHttpCachingService } from 'ng-http-caching';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  constructor(private ngHttpCachingService: NgHttpCachingService) { }

  public ngOnInit(): void {
  }

  public clearTagCache(tag: string): void {
    this.ngHttpCachingService.clearCacheByTag(tag);
  }

  public clearAllCache(): void {
    this.ngHttpCachingService.clearCache();
  }
}
