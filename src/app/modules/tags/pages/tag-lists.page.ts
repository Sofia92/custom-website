/**
 * User: sofia
 * Date: 2018/1/22
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ITagSitesInterface, TagService} from '../service/tags.service';
import {Site} from '../model/site';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tags-lists',
  templateUrl: './tag-lists.page.html',
  styleUrls: ['./tag-lists.page.scss']
})

export class TagListsPageComponent implements OnInit {
  sites: Site[];
  pageInfo: AppCommonModule.IPageInfoDataInterface;

  constructor(private activatedRouter: ActivatedRoute, private _tagService: TagService) {
    this.pageInfo = {page: 1, size: 10, total: 0};
  }

  ngOnInit() {
    this.activatedRouter.params.filter(param => !!param.tagId).switchMap((param) => {
      return this._tagService.fetchTagsById(+param.tagId, this.pageInfo)
    }).subscribe((res: ITagSitesInterface) => {
      this.sites = res.sites;
      this.pageInfo.total = res.total;
    })
  }

  goToSite(site: Site) {
    window.open('http://' + site.hostName);
  }

}
