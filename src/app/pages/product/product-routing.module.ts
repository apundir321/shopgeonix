import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultPageComponent } from './default/default.component';
import { GalleryPageComponent } from './gallery/gallery.component';

// import { CenteredPageComponent } from './centered/centered.component';
// import { ExtendedPageComponent } from './extended/extended.component';
// import { FullWidthPageComponent } from './fullwidth/fullwidth.component';
// import { GalleryPageComponent } from './gallery/gallery.component';
// import { MasonryPageComponent } from './masonry/masonry.component';
// import { SidebarPageComponent } from './sidebar/sidebar.component';
// import { StickyInfoPageComponent } from './sticky-info/sticky-info.component';

const routes: Routes = [
    {
        path: ':cat/:slug',
        component: DefaultPageComponent
    },
    {
        path: 'gallery/:slug',
        component:  GalleryPageComponent
    }
   
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { };