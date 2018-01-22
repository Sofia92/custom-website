/**
 * User: sofia
 * Date: 2018/1/22
 * Version: 1.0.0
 * Description:
 */
import {Injectable} from '@angular/core';
import {environment} from './../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TagCategory} from '../model/tag-category';
import {Site} from '../model/site';

const api = environment.api;
export interface ITagSitesInterface {
  sites?: Site[],
  total?: number
}
@Injectable()
export class TagService {
  constructor(private http: HttpClient) {

  }

  fetchTagCategories(): Observable<TagCategory[]> {
    return this.http.get(`${api}/tags`).map((tags: any[]) => {
      return tags.map(tag => TagCategory.createByJSON(tag));
    })
  }

  fetchTagsById(id: number, pageInfo: AppCommonModule.IPageInfoDataInterface): Observable<ITagSitesInterface> {
    return this.http.get(`${api}/tags/${id}/sites?page=${pageInfo.page}&size=${pageInfo.size}`).map((res: any) => {
      return {
        sites: (res.sites || []).map(site => Site.createByJSON(site)),
        total: res.meta.total
      }
    })
  }

}
