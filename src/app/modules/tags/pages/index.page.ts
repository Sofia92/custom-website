/**
 * User: sofia
 * Date: 2018/1/22
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagService} from '../service/tags.service';
import {TagCategory} from '../model/tag-category';
@Component({
  selector: 'app-tag-index-page',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})

export class TagsIndexPageComponent implements OnInit {
  allTags: TagCategory[];
  leafTags: TagCategory[];
  currentTopCategory: string;
  currentSubCategory: string;
  allCategories: Set<string>;
  subCategories: Set<string>;

  constructor(private _tagService: TagService, private router: Router) {
  }

  ngOnInit() {
    this._tagService.fetchTagCategories().subscribe((tags: TagCategory[]) => {
      this.allTags = tags;
      this.allCategories = new Set(tags.map(tag => tag.category));
      this.setCurrentTopCategory(this.allCategories.values().next().value);
    })
  }

  setCurrentTopCategory(category: string) {
    this.currentTopCategory = category;
    this.subCategories = new Set(this.allTags.filter(tag => tag.category === category && tag.subCategory !== '')
      .map(item => item.subCategory));
    this.leafTags = this.allTags.filter(tag => tag.category === category && tag.subCategory === '');
  }

  setCurrentSubCategory(category: string) {
    this.currentSubCategory = category;
    const leafCategoryTags = this.allTags.filter(tag => tag.category === this.currentTopCategory && tag.subCategory === '');
    const subCategoryLeafTags = this.allTags.filter(tag => tag.category === this.currentTopCategory && tag.subCategory === category);
    this.leafTags = leafCategoryTags.concat(subCategoryLeafTags);
  }

  routerToCurrentTag(tag: TagCategory) {
    this.router.navigate([`/tags/${tag.id}/lists`]);
  }
}

