/**
 * User: sofia
 * Date: 2018/1/22
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {TagService} from './service/tags.service';

import {TagsIndexPageComponent} from './pages/index.page';
import {TagListsPageComponent} from './pages/tag-lists.page';


const tagsRoutes: Routes = [
  {path: '', redirectTo: 'tags', pathMatch: 'full'},
  {path: 'tags', component: TagsIndexPageComponent},
  {path: 'tags/:tagId/lists', component: TagListsPageComponent},

];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(tagsRoutes),
  ],
  declarations: [
    TagsIndexPageComponent,
    TagListsPageComponent,
  ],
  providers: [
    TagService
  ],
  exports: []
})
export class TagsModule {
}
