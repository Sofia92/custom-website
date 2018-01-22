import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TagsModule} from './modules/tags/tags.module';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'tags', pathMatch: 'full'},
  {path: 'tags', loadChildren: 'modules/tags/tags.module#TagsModule'},
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TagsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
