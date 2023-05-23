import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
// First Case
// first match wins
const routes: Routes = [
  // Default path
  // {path:'',component:MainComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: MainComponent, title: 'Home page' },
  {
    path: 'Products',
    component: ProductsListComponent,
    title: 'Products page',
  },
  {
    path: 'ProductsParent',
    component: ProductParentComponent,
    title: 'Products Parent page',
  },
  // parameter
  {path:'productDetails/:prodID',component: ProductDetailsComponent,title:'Product Details page'},
  { path: 'AboutUs', component: AboutusComponent, title: 'About Us page' },

  // 404 not found
  { path: '**', component: NotFoundPageComponent, title: '404 Page not found' },
  // wild card path => not found path
];

// Second Case
// const routes: Routes = [
//   {
//     path: 'main',
//     component: GroupOfRoutesComponent,
//     children: [
//       { path: '', redirectTo: '/Home', pathMatch: 'full' },
//       { path: 'Home', component: MainComponent, title: 'Home page' },
//       {
//         path: 'Products',
//         component: ProductsListComponent,
//         title: 'Products page',
//       },
//       {
//         path: 'ProductsParent',
//         component: ProductParentComponent,
//         title: 'Products Parent page',
//       },
//       { path: 'AboutUs', component: AboutusComponent, title: 'About Us page' },
//     ],
//   },

//   { path: '**', component: NotFoundPageComponent, title: '404 Page not found' },

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
